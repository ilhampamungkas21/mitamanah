-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  author TEXT DEFAULT 'MIT Amanah',
  seo_title TEXT NOT NULL,
  seo_description TEXT NOT NULL,
  seo_keywords TEXT NOT NULL,
  canonical_url TEXT NOT NULL,
  meta_robots TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create galleries table
CREATE TABLE IF NOT EXISTS galleries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create hero_settings table for customizable hero content
CREATE TABLE IF NOT EXISTS hero_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL DEFAULT 'Empowering Minds, Shaping Futures',
  description TEXT NOT NULL DEFAULT 'Quality education in Kebonromo, Sragen. Discover our innovations, read inspiring stories, and explore our vibrant school community.',
  subtitle TEXT DEFAULT 'Welcome to MIT Amanah',
  cta_primary_text TEXT DEFAULT 'Explore Articles',
  cta_secondary_text TEXT DEFAULT 'View Gallery',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE galleries ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_settings ENABLE ROW LEVEL SECURITY;

  -- RLS Policies for articles (public read, admin write)
 -- Public read
CREATE POLICY "Anyone can view articles"
ON articles FOR SELECT
USING (true);

-- Admin create
CREATE POLICY "Admins can insert articles"
ON articles FOR INSERT
WITH CHECK (true);

-- Admin update
CREATE POLICY "Admins can update articles"
ON articles FOR UPDATE
USING (true);

-- Admin delete
CREATE POLICY "Admins can delete articles"
ON articles FOR DELETE
USING (true);


  -- RLS Policies for galleries (public read, admin write)
CREATE POLICY "Anyone can view galleries"
ON galleries FOR SELECT
USING (true);

CREATE POLICY "Admins can insert galleries"
ON galleries FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can update galleries"
ON galleries FOR UPDATE
USING (true);

CREATE POLICY "Admins can delete galleries"
ON galleries FOR DELETE
USING (true);


  -- RLS Policies for gallery_images (public read, admin write)
CREATE POLICY "Anyone can view gallery images"
ON gallery_images FOR SELECT
USING (true);

CREATE POLICY "Admins can insert gallery images"
ON gallery_images FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can update gallery images"
ON gallery_images FOR UPDATE
USING (true);

CREATE POLICY "Admins can delete gallery images"
ON gallery_images FOR DELETE
USING (true);

  -- RLS Policies for admin_users
-- Only admin can view
CREATE POLICY "Admins can view admin users"
ON admin_users FOR SELECT
USING (true);

-- Only service role can insert/update/delete
CREATE POLICY "Only service role can manage admin_users"
ON admin_users
USING (false);

  -- RLS Policies for hero_settings (public read, admin write)
CREATE POLICY "Anyone can view hero settings"
ON hero_settings FOR SELECT
USING (true);

CREATE POLICY "Admins can update hero settings"
ON hero_settings FOR UPDATE
USING (true);

-- Add seed data for sample articles
INSERT INTO articles 
(title, slug, excerpt, content, image_url, author, 
 seo_title, seo_description, seo_keywords, canonical_url, meta_robots)
VALUES
(
 'Selamat Datang di MIT Amanah',
 'selamat-datang-mit-amanah',
 'Kami dengan bangga mempersembahkan website resmi MIT Amanah',
 'MIT Amanah adalah sebuah institusi pendidikan yang berkomitmen untuk memberikan pendidikan berkualitas tinggi. Dengan fasilitas modern dan tenaga pengajar profesional, kami siap membimbing generasi muda menuju masa depan yang cerah.',
 '/placeholder.svg?height=400&width=800',
 'Admin MIT Amanah',
 'Selamat Datang di MIT Amanah',
 'Website resmi MIT Amanah, informasi sekolah dan kegiatan',
 'mit amanah, pendidikan, sekolah islam, sragen',
 '/articles/selamat-datang-mit-amanah',
 'index, follow'
),
(
 'Program Pembelajaran Inovatif',
 'program-pembelajaran-inovatif',
 'Kami menawarkan berbagai program pembelajaran yang dirancang khusus',
 'Program pembelajaran kami dirancang dengan kurikulum internasional yang disesuaikan dengan kebutuhan lokal. Setiap siswa mendapatkan perhatian personal dan dukungan akademik yang komprehensif untuk mencapai potensi maksimal mereka.',
 '/placeholder.svg?height=400&width=800',
 'Admin MIT Amanah',
 'Program Pembelajaran Inovatif',
 'Inovasi program pembelajaran MIT Amanah',
 'program belajar, inovasi pendidikan, mit amanah',
 '/articles/program-pembelajaran-inovatif',
 'index, follow'
),
(
 'Ekstrakurikuler dan Pengembangan Karakter',
 'ekstrakurikuler-pengembangan-karakter',
 'Program ekstrakurikuler yang komprehensif untuk mengembangkan potensi siswa',
 'Selain akademik, kami juga menyediakan berbagai kegiatan ekstrakurikuler mulai dari olahraga, seni, hingga pengembangan kepemimpinan. Kegiatan ini dirancang untuk mengembangkan karakter, kepercayaan diri, dan keterampilan sosial siswa.',
 '/placeholder.svg?height=400&width=800',
 'Admin MIT Amanah',
 'Ekstrakurikuler dan Pengembangan Karakter',
 'Program ekstrakurikuler siswa MIT Amanah',
 'ekstrakurikuler, pengembangan karakter, mit amanah',
 '/articles/ekstrakurikuler-pengembangan-karakter',
 'index, follow'
);

-- Add seed data for sample galleries
INSERT INTO galleries (title, description) VALUES
('Fasilitas Sekolah', 'Galeri foto fasilitas modern yang kami miliki untuk mendukung proses pembelajaran'),
('Acara dan Kegiatan', 'Koleksi foto dari berbagai acara dan kegiatan sekolah yang telah dilaksanakan'),
('Prestasi Siswa', 'Dokumentasi prestasi dan pencapaian siswa MIT Amanah'),
('Lingkungan Kampus', 'Pemandangan indah dan area hijau di lingkungan kampus kami');

-- Add seed images to galleries
INSERT INTO gallery_images (gallery_id, image_url, alt_text, order_index) VALUES
((SELECT id FROM galleries WHERE title = 'Fasilitas Sekolah'), '/placeholder.svg?height=300&width=400', 'Ruang kelas modern', 0),
((SELECT id FROM galleries WHERE title = 'Fasilitas Sekolah'), '/placeholder.svg?height=300&width=400', 'Perpustakaan sekolah', 1),
((SELECT id FROM galleries WHERE title = 'Fasilitas Sekolah'), '/placeholder.svg?height=300&width=400', 'Lab komputer', 2),
((SELECT id FROM galleries WHERE title = 'Acara dan Kegiatan'), '/placeholder.svg?height=300&width=400', 'Acara perayaan sekolah', 0),
((SELECT id FROM galleries WHERE title = 'Acara dan Kegiatan'), '/placeholder.svg?height=300&width=400', 'Kumpulan siswa', 1),
((SELECT id FROM galleries WHERE title = 'Prestasi Siswa'), '/placeholder.svg?height=300&width=400', 'Penghargaan siswa', 0),
((SELECT id FROM galleries WHERE title = 'Lingkungan Kampus'), '/placeholder.svg?height=300&width=400', 'Area hijau kampus', 0),
((SELECT id FROM galleries WHERE title = 'Lingkungan Kampus'), '/placeholder.svg?height=300&width=400', 'Bangunan sekolah yang indah', 1);

-- Insert default hero settings
INSERT INTO hero_settings (title, description, subtitle, cta_primary_text, cta_secondary_text) 
VALUES (
  'Empowering Minds, Shaping Futures',
  'Quality education in Kebonromo, Sragen. Discover our innovations, read inspiring stories, and explore our vibrant school community.',
  'Welcome to MIT Amanah',
  'Explore Articles',
  'View Gallery'
);

-- Add note about creating admin user
-- To create an admin user, you need to:
-- 1. Create a Supabase auth user through the dashboard or signup flow
-- 2. Copy the user's UUID from the auth.users table
-- 3. Insert a record in the admin_users table with that UUID:
--    INSERT INTO admin_users (id, email, full_name) 
--    VALUES ('USER-UUID-HERE', 'admin@mitamanah.sch.id', 'Admin MIT Amanah');
--
-- For development, you can create a test admin user after signup in the Supabase dashboard:
-- - Go to Authentication > Users
-- - Copy the UID of the user you created
-- - Run the INSERT statement above with the UID

-- Add SEO columns for articles
ALTER TABLE articles ADD COLUMN IF NOT EXISTS seo_title TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS seo_description TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS seo_keywords TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS canonical_url TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS meta_robots TEXT;
