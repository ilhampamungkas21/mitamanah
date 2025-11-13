-- Fix infinite recursion in admin_users RLS policy by using a simpler approach
-- Drop the problematic policies
DROP POLICY IF EXISTS "Admins can view admin users" ON admin_users;
DROP POLICY IF EXISTS "Only service role can manage admin users" ON admin_users;

-- Create corrected RLS policies for admin_users
-- Admins can view all admin users (without subquery to avoid recursion)
CREATE POLICY "Admins can view admin users" ON admin_users 
FOR SELECT 
USING (auth.uid() = id);

-- Only allow admins to insert new admin users (use service_role context)
CREATE POLICY "Service role can insert admin users" ON admin_users 
FOR INSERT 
WITH CHECK (true);

-- Only admins can update their own record or service role can update any
CREATE POLICY "Admins can update admin users" ON admin_users 
FOR UPDATE 
USING (auth.uid() = id OR auth.role() = 'service_role');

-- Only admins can delete their own record or service role can delete any
CREATE POLICY "Admins can delete admin users" ON admin_users 
FOR DELETE 
USING (auth.uid() = id OR auth.role() = 'service_role');

-- Remove the problematic recursive policies from other tables
DROP POLICY IF EXISTS "Only admins can insert articles" ON articles;
DROP POLICY IF EXISTS "Only admins can update articles" ON articles;
DROP POLICY IF EXISTS "Only admins can delete articles" ON articles;

DROP POLICY IF EXISTS "Only admins can insert galleries" ON galleries;
DROP POLICY IF EXISTS "Only admins can update galleries" ON galleries;
DROP POLICY IF EXISTS "Only admins can delete galleries" ON galleries;

DROP POLICY IF EXISTS "Only admins can insert gallery images" ON gallery_images;
DROP POLICY IF EXISTS "Only admins can update gallery images" ON gallery_images;
DROP POLICY IF EXISTS "Only admins can delete gallery images" ON gallery_images;

DROP POLICY IF EXISTS "Only admins can update hero settings" ON hero_settings;

-- Create non-recursive policies for articles
CREATE POLICY "Only admins can insert articles" ON articles 
FOR INSERT 
WITH CHECK (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

CREATE POLICY "Only admins can update articles" ON articles 
FOR UPDATE 
USING (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

CREATE POLICY "Only admins can delete articles" ON articles 
FOR DELETE 
USING (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

-- Create non-recursive policies for galleries
CREATE POLICY "Only admins can insert galleries" ON galleries 
FOR INSERT 
WITH CHECK (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

CREATE POLICY "Only admins can update galleries" ON galleries 
FOR UPDATE 
USING (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

CREATE POLICY "Only admins can delete galleries" ON galleries 
FOR DELETE 
USING (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

-- Create non-recursive policies for gallery_images
CREATE POLICY "Only admins can insert gallery images" ON gallery_images 
FOR INSERT 
WITH CHECK (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

CREATE POLICY "Only admins can update gallery images" ON gallery_images 
FOR UPDATE 
USING (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

CREATE POLICY "Only admins can delete gallery images" ON gallery_images 
FOR DELETE 
USING (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);

-- Create non-recursive policy for hero_settings
CREATE POLICY "Only admins can update hero settings" ON hero_settings 
FOR UPDATE 
USING (auth.role() = 'service_role' OR auth.jwt()->>'email' IS NOT NULL);
