import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase-piglmayer.levelling.app';
const supabasePublishableKey =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc4MTY5MzEwMCwiZXhwIjo0OTM3MzY2NzAwLCJyb2xlIjoiYW5vbiJ9.lAeueM50Te_JtAWP3OK7f1rKUboOhhVdbWFh2n7wCkA';

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
