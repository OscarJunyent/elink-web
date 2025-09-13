-- First, add user_id columns to all financial tables to associate data with users
ALTER TABLE public.ingressos ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.entrades_manuals ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.despeses_fixes ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.despeses_variables ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.despeses_targeta ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.moviments_bizum ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Drop the existing insecure RLS policies
DROP POLICY IF EXISTS "Allow all operations on ingressos" ON public.ingressos;
DROP POLICY IF EXISTS "Allow all operations on entrades_manuals" ON public.entrades_manuals;
DROP POLICY IF EXISTS "Allow all operations on despeses_fixes" ON public.despeses_fixes;
DROP POLICY IF EXISTS "Allow all operations on despeses_variables" ON public.despeses_variables;
DROP POLICY IF EXISTS "Allow all operations on despeses_targeta" ON public.despeses_targeta;
DROP POLICY IF EXISTS "Allow all operations on moviments_bizum" ON public.moviments_bizum;

-- Create secure RLS policies for ingressos table
CREATE POLICY "Users can view their own ingressos" 
ON public.ingressos 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own ingressos" 
ON public.ingressos 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own ingressos" 
ON public.ingressos 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own ingressos" 
ON public.ingressos 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- Create secure RLS policies for entrades_manuals table
CREATE POLICY "Users can view their own entrades_manuals" 
ON public.entrades_manuals 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own entrades_manuals" 
ON public.entrades_manuals 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own entrades_manuals" 
ON public.entrades_manuals 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own entrades_manuals" 
ON public.entrades_manuals 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- Create secure RLS policies for despeses_fixes table
CREATE POLICY "Users can view their own despeses_fixes" 
ON public.despeses_fixes 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own despeses_fixes" 
ON public.despeses_fixes 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own despeses_fixes" 
ON public.despeses_fixes 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own despeses_fixes" 
ON public.despeses_fixes 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- Create secure RLS policies for despeses_variables table
CREATE POLICY "Users can view their own despeses_variables" 
ON public.despeses_variables 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own despeses_variables" 
ON public.despeses_variables 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own despeses_variables" 
ON public.despeses_variables 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own despeses_variables" 
ON public.despeses_variables 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- Create secure RLS policies for despeses_targeta table
CREATE POLICY "Users can view their own despeses_targeta" 
ON public.despeses_targeta 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own despeses_targeta" 
ON public.despeses_targeta 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own despeses_targeta" 
ON public.despeses_targeta 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own despeses_targeta" 
ON public.despeses_targeta 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- Create secure RLS policies for moviments_bizum table
CREATE POLICY "Users can view their own moviments_bizum" 
ON public.moviments_bizum 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own moviments_bizum" 
ON public.moviments_bizum 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own moviments_bizum" 
ON public.moviments_bizum 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own moviments_bizum" 
ON public.moviments_bizum 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);