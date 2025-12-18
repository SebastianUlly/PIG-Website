import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://grzfiyzkylmsgyjpmkav.supabase.co';
const supabasePublishableKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyemZpeXpreWxtc2d5anBta2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMTM5NDEsImV4cCI6MjA3OTU4OTk0MX0.VpadddB4rSgXcwPMa5QAgTZvpWMmqTimCzAUrlaRPVw';

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
