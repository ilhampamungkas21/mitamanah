-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  author TEXT DEFAULT 'MIT Amanah',
  seo_title  TEXT NOT NULL,
  seo_description TEXT NOT NULL,
  seo_keywords TEXT NOT NULL,
  canonical_url TEXT NOT NULL,
  meta_robots TEXT DEFAULT 'index, follow',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create galleries table
CREATE TABLE IF NOT EXISTS galleries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create hero_settings table for customizable hero content
CREATE TABLE IF NOT EXISTS hero_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL DEFAULT 'Empowering Minds, Shaping Futures',
  description TEXT NOT NULL DEFAULT 'Quality education in Kebonromo, Sragen. Discover our innovations, read inspiring stories, and explore our vibrant school community.',
  subtitle TEXT DEFAULT 'Welcome to MIT Amanah',
  cta_primary_text TEXT DEFAULT 'Explore Articles',
  cta_secondary_text TEXT DEFAULT 'View Gallery',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE galleries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for articles (public read, admin write)
CREATE POLICY "Anyone can view articles" ON articles FOR SELECT USING (true);
CREATE POLICY "Only admins can insert articles" ON articles FOR INSERT WITH CHECK (
  auth.uid() IN (SELECT id FROM admin_users)
);
CREATE POLICY "Only admins can update articles" ON articles FOR UPDATE USING (
  auth.uid() IN (SELECT id FROM admin_users)
);
CREATE POLICY "Only admins can delete articles" ON articles FOR DELETE USING (
  auth.uid() IN (SELECT id FROM admin_users)
);

-- RLS Policies for galleries (public read, admin write)
CREATE POLICY "Anyone can view galleries" ON galleries FOR SELECT USING (true);
CREATE POLICY "Only admins can insert galleries" ON galleries FOR INSERT WITH CHECK (
  auth.uid() IN (SELECT id FROM admin_users)
);
CREATE POLICY "Only admins can update galleries" ON galleries FOR UPDATE USING (
  auth.uid() IN (SELECT id FROM admin_users)
);
CREATE POLICY "Only admins can delete galleries" ON galleries FOR DELETE USING (
  auth.uid() IN (SELECT id FROM admin_users)
);



-- RLS Policies for admin_users
CREATE POLICY "Admins can view admin users" ON admin_users FOR SELECT USING (
  auth.uid() IN (SELECT id FROM admin_users)
);
CREATE POLICY "Only service role can manage admin users" ON admin_users USING (false);

-- RLS Policies for hero_settings (public read, admin write)
CREATE POLICY "Anyone can view hero settings" ON hero_settings FOR SELECT USING (true);
CREATE POLICY "Only admins can update hero settings" ON hero_settings FOR UPDATE USING (
  auth.uid() IN (SELECT id FROM admin_users)
);

-- Add seed data for sample articles
INSERT INTO articles ("id", "title", "slug", "excerpt", "content", "image_url", "author", "seo_title", "seo_description", "seo_keywords", "canonical_url", "meta_robots", "created_at", "updated_at") VALUES ('22d05614-d297-43fb-b27a-9a2f547f75e4', 'New article', 'new-article', 'New article', '<p>New article</p>', 'https://eduspace-nextjs.vercel.app/assets/img/news/08.jpg', 'MIT Amanah', 'New article', 'New article', 'New article', 'http://localhost:3000/dashboard/articles/selamat-datang-mit-amanah', 'index', '2025-11-15 10:31:02.888339+00', '2025-11-15 10:31:02.888339+00'), ('7d85d27f-4fb2-4684-bbba-d03411f11c10', 'Selamat Datang di MIT Amanah edit', 'selamat-datang-mit-amanah', 'Kami dengan bangga mempersembahkan website resmi MIT Amanah', '<p>MIT Amanah adalah sebuah institusi pendidikan yang berkomitmen untuk memberikan pendidikan berkualitas tinggi. Dengan fasilitas modern dan tenaga pengajar profesional, kami siap membimbing generasi muda menuju masa depan yang cerah.</p>', 'https://eduspace-nextjs.vercel.app/assets/img/courses/boy.png', 'Admin MIT Amanah', 'Selamat Datang di MIT Amanah', 'Website resmi MIT Amanah, informasi sekolah dan kegiatan', 'mit amanah, pendidikan, sekolah islam, sragen', 'http://localhost:3000/dashboard/articles/selamat-datang-mit-amanah', 'index, follow', '2025-11-15 07:59:25.815147+00', '2025-11-15 07:59:25.815147+00'), ('e4cdf535-198d-4f07-972f-57c5cbc8791c', 'Mengapa Memilih MIT Amanah sebagai MI Terbaik di Sragen?', 'mengapa-memilih-mit-amanah-mi-terbaik-sragen', 'Mengapa Memilih MIT Amanah sebagai MI Terbaik di Sragen?', '<h2><strong>Mengapa Memilih MIT Amanah sebagai MI Terbaik di Sragen?</strong></h2><p><br></p><h3><strong>1. Kurikulum Terpadu (Kurikulum Nasional + Kurikulum Keagamaan)</strong></h3><p>MIT Amanah menerapkan pembelajaran yang holistik, meliputi:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mata pelajaran umum (Matematika, IPA, Bahasa Indonesia, dll.)</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Penguatan keagamaan:</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> ✓ Aqidah Akhlak</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> ✓ Al-Qur’an Hadis</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> ✓ Fikih</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> ✓ Bahasa Arab</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span> ✓ Tahfidz</li></ol><p>Perpaduan ini memastikan siswa berkembang secara akademik dan spiritual.</p><h3><strong>2. Fokus pada Karakter dan Akhlak Mulia</strong></h3><p>MIT Amanah memiliki program pembiasaan Islami setiap hari, seperti:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Shalat dhuha dan dzuhur berjamaah</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Pembiasaan salam dan adab</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Literasi Qur''an</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Program tahfidz bertahap</li></ol><p>Tujuannya adalah membentuk generasi yang disiplin, sopan, dan berakhlak baik.</p><h3><strong>3. Lingkungan Belajar Nyaman dan Aman</strong></h3><p>Sekolah menyediakan ruang kelas yang nyaman, bersih, dan tertata. Area sekolah juga dirancang untuk mendukung kegiatan belajar yang aman dan menyenangkan.</p><h3><strong>4. Guru Profesional dan Ramah Anak</strong></h3><p>MIT Amanah memiliki tenaga pendidik yang berpengalaman, kompeten, dan dekat dengan siswa. Guru bukan hanya mengajar, tetapi juga menjadi teladan bagi anak-anak.</p><h3><strong>5. Ekstrakurikuler dan Kegiatan Pengembangan Diri</strong></h3><p>Beberapa kegiatan unggulan yang biasa diberikan MI modern seperti MIT Amanah:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Pramuka</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Tahfidz Camp</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Lomba akademik dan keagamaan</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Literasi dan kegiatan seni</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Outbound edukatif</li></ol><p>Kegiatan ini membantu mengasah minat dan bakat siswa.</p><p><br></p><h2><strong>Keunggulan MIT Amanah Dibanding MI Lain di Sragen</strong></h2><p>MIT Amanah dikenal karena:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Pendekatan Islami yang moderat, lembut, dan aplikatif</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Fasilitas yang terus dikembangkan</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Lingkungan sekolah yang bersih dan ramah anak</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Pembelajaran berbasis karakter</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kegiatan keislaman yang hidup dan menyatu dengan aktivitas sekolah</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Pengawasan dan komunikasi yang baik antara guru dan orang tua</li></ol><p>MIT Amanah menawarkan pendidikan dasar Islam yang relevan dengan kebutuhan masa kini, tanpa meninggalkan nilai-nilai Qur’ani.</p><p><br></p><h2><strong>Siapa yang Cocok Bersekolah di MIT Amanah?</strong></h2><p>MIT Amanah cocok untuk orang tua yang mencari:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Madrasah Ibtidaiyah (MI) di Sragen</strong> yang fokus pada akhlak dan ibadah</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Sekolah dasar Islam yang ramah anak</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Lingkungan belajar yang nyaman dan aman</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Guru yang perhatian dan mendidik dengan kasih sayang</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kurikulum seimbang antara umum dan agama</li></ol><p>Jika Anda ingin memberikan dasar pendidikan yang kuat bagi putra-putri Anda, MIT Amanah adalah pilihan tepat.</p><p><br></p><h2><strong>Kesimpulan</strong></h2><p><strong>MIT Amanah Sragen</strong> adalah salah satu <strong>sekolah Madrasah Ibtidaiyah (MI) terbaik di Sragen</strong> yang memadukan pendidikan Islam modern, karakter, dan akademik yang kokoh. Berlokasi di <strong>Kebonromo, Ngrampal, Sragen</strong>, sekolah ini menyediakan lingkungan belajar yang Islami, nyaman, dan mendukung perkembangan anak secara menyeluruh.</p><p>Dengan kurikulum terpadu, program pembiasaan Islami, guru profesional, serta fasilitas yang terus berkembang, MIT Amanah menjadi pilihan ideal untuk pendidikan dasar berbasis Islam di Sragen.</p><p><br></p>', 'https://scontent.cdninstagram.com/v/t51.82787-15/581082639_18172930102369294_539454948683027852_n.webp?_nc_cat=106&ig_cache_key=Mzc2MzM3NTk0MzExMzYxNDg5NA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=dqXUbiP2mZ8Q7kNvwHA5O53&_nc_oc=AdlshAXFjW6Ld2BEFjG8-PV36g_Nh1AxYDpuZd0xKIahUveQSXXR5w3CbU2Jr-PQBcY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=JvWmlhWv4ocOWbChi_woJQ&oh=00_AfgM1hY28QiPWWBpjqi91ZMZWdtb2m3R3K1pBxUsgDsO2w&oe=691E1B1C', 'Admin MIT Amanah', 'Mengapa Memilih MIT Amanah sebagai MI Terbaik di Sragen?', 'MIT Amanah Sragen adalah salah satu sekolah Madrasah Ibtidaiyah (MI) terbaik di Sragen yang memadukan pendidikan Islam modern, karakter, dan akademik yang kokoh. Berlokasi di Kebonromo, Ngrampal, Sragen, sekolah ini menyediakan lingkungan belajar yang Islami, nyaman, dan mendukung perkembangan anak secara menyeluruh.
Dengan kurikulum terpadu, program pembiasaan Islami, guru profesional, serta fasilitas yang terus berkembang, MIT Amanah menjadi pilihan ideal untuk pendidikan dasar berbasis Islam di Sragen.', 'Sekolah Sragen, MI Sragen, MI Terbaik', 'https://localhost:3000/articles/mengapa-memilih-mit-amanah-mi-terbaik-sragen', 'index, follow', '2025-11-15 07:59:25.815147+00', '2025-11-15 07:59:25.815147+00'), ('ed0523bd-4b0a-431b-907c-eb4bd6d490f3', 'Ekstrakurikuler MIT Amanah: Mengembangkan Minat, Karakter, dan Potensi Siswa', 'ekstrakurikuler-pengembangan-karakter', 'Ekstrakurikuler MIT Amanah: Mengembangkan Minat, Karakter, dan Potensi Siswa', '<h2><strong>Ekstrakurikuler MIT Amanah: Mengembangkan Minat, Karakter, dan Potensi Siswa</strong></h2><p><br></p><p>MIT Amanah Sragen bukan hanya fokus pada pembelajaran akademik dan nilai-nilai keislaman, tetapi juga memberikan ruang bagi siswa untuk mengembangkan bakat dan keterampilan melalui berbagai kegiatan <strong>ekstrakurikuler (ekskul)</strong>. Program ekskul ini dirancang untuk membentuk karakter, kreativitas, kedisiplinan, serta kemampuan sosial siswa sejak dini.</p><p>Berikut adalah empat ekstrakurikuler unggulan di MIT Amanah:</p><h2><strong>1. Ekstrakurikuler Tahfidz – Menumbuhkan Cinta Al-Qur’an</strong></h2><p>Tahfidz merupakan salah satu ekskul utama di MIT Amanah. Program ini ditujukan untuk:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Membiasakan siswa membaca Al-Qur’an dengan tartil</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Melatih hafalan juz 30, 29, dan surat-surat pilihan</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Menanamkan kecintaan pada Al-Qur’an sejak kecil</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Membentuk karakter disiplin dan sabar</li></ol><p>Pembelajaran tahfidz dibimbing oleh ustaz/ustazah berpengalaman dengan metode yang menyenangkan, seperti talaqqi, muroja’ah kelompok, dan permainan edukatif. Dengan adanya ekskul ini, siswa diharapkan mampu menghafal Al-Qur’an secara konsisten dan memahami nilai-nilai di dalamnya.</p><h2><strong>2. Ekstrakurikuler Taekwondo – Melatih Fisik, Fokus, dan Percaya Diri</strong></h2><p>Taekwondo adalah ekskul favorit yang menggabungkan olahraga, seni bela diri, dan pembentukan mental. Manfaat utama bagi siswa:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Meningkatkan daya tahan dan kebugaran tubuh</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mengajarkan disiplin, fokus, dan ketepatan gerak</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Melatih keberanian dan kepercayaan diri</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mengembangkan kemampuan bela diri dasar sebagai perlindungan diri</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mempersiapkan siswa mengikuti kompetisi Taekwondo tingkat daerah</li></ol><p>Latihan dipandu oleh pelatih bersertifikat sehingga keamanan dan kualitas pembelajaran tetap terjaga.</p><h2><strong>3. Ekstrakurikuler Pramuka – Menumbuhkan Kemandirian dan Kepemimpinan</strong></h2><p>Sebagai bagian dari pendidikan karakter, Pramuka di MIT Amanah sering menjadi kegiatan yang paling disukai. Program ini bertujuan untuk:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Melatih kerja sama dan solidaritas</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mengembangkan jiwa kepemimpinan</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mengajarkan kedisiplinan dan rasa tanggung jawab</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Melatih kemampuan bertahan hidup dasar</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Meningkatkan keaktifan, kreativitas, dan kecintaan pada alam</li></ol><p>Kegiatan Pramuka mencakup baris-berbaris, yel-yel, permainan edukatif, jelajah alam, hingga kegiatan perkemahan kecil. Pramuka di MIT Amanah menjadi wadah ideal untuk mengembangkan karakter positif sejak dini.</p><h2><strong>4. Ekstrakurikuler Bahasa &amp; Jurnalistik – Meningkatkan Literasi dan Kreativitas Menulis</strong></h2><p>Ekskul Bahasa dan Jurnalistik hadir sebagai ruang kreatif bagi siswa yang suka membaca, menulis, atau bercerita. Di dalamnya, siswa belajar:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Teknik dasar menulis cerita, berita, dan artikel</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Keterampilan berbicara di depan umum (public speaking)</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Membuat laporan kegiatan sekolah</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mewawancarai narasumber</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Editing sederhana tulisan dan konten</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Membuat majalah atau buletin sekolah</li></ol><p>Ekskul ini bertujuan meningkatkan kemampuan literasi siswa sekaligus membentuk kepercayaan diri dalam berkomunikasi. Program jurnalistik juga membiasakan siswa untuk berpikir kritis, kreatif, dan objektif.</p><h2><strong>Kesimpulan</strong></h2><p>Empat ekstrakurikuler MIT Amanah—<strong>Tahfidz, Taekwondo, Pramuka, serta Bahasa &amp; Jurnalistik</strong>—dirancang untuk memberikan pengalaman belajar yang lengkap, seimbang, dan menyenangkan bagi siswa. Melalui kegiatan ekskul ini, siswa tidak hanya memperoleh keterampilan tambahan, tetapi juga membangun karakter kuat yang akan menjadi bekal berharga untuk masa depan mereka.</p><p>MIT Amanah Sragen percaya bahwa pendidikan terbaik adalah pendidikan yang menumbuhkan potensi akademik, spiritual, fisik, dan sosial siswa secara menyeluruh.</p>', 'https://ik.imagekit.io/mhpkdla7z/mit-amanah/ekskul-sekolah.webp?updatedAt=1763202124011', 'Admin MIT Amanah', 'Ekstrakurikuler dan Pengembangan Karakter', 'Program ekstrakurikuler siswa MIT Amanah', 'ekstrakurikuler, pengembangan karakter, mit amanah', 'https://localhost:3000/articles/ekstrakurikuler-pengembangan-karakter', 'index, follow', '2025-11-15 07:59:25.815147+00', '2025-11-15 07:59:25.815147+00');

-- Add seed data for sample galleries
INSERT INTO galleries (title, description, image_url) VALUES
('Fasilitas Sekolah', 'Galeri foto fasilitas modern yang kami miliki untuk mendukung proses pembelajaran', 'https://placehold.co/600x400'),
('Acara dan Kegiatan', 'Koleksi foto dari berbagai acara dan kegiatan sekolah yang telah dilaksanakan', 'https://placehold.co/600x400'),
('Prestasi Siswa', 'Dokumentasi prestasi dan pencapaian siswa MIT Amanah', 'https://placehold.co/600x400'),
('Lingkungan Kampus', 'Pemandangan indah dan area hijau di lingkungan kampus kami', 'https://placehold.co/600x400');


-- Insert default hero settings
INSERT INTO hero_settings (
  title, 
  description, 
  subtitle, 
  cta_primary_text, 
  cta_secondary_text, 
  image_url
) 
VALUES (
  'Empowering Minds, Shaping Futures',
  'Quality education in Kebonromo, Sragen. Discover our innovations, read inspiring stories, and explore our vibrant school community.',
  'Welcome to MIT Amanah',
  'Explore Articles',
  'View Gallery',
  'https://placehold.co/600x400'
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
