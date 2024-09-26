import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://wigwcrladxritlcbdlxi.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZ3djcmxhZHhyaXRsY2JkbHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNjc0NDMsImV4cCI6MjA0Mjk0MzQ0M30.suGw-b_8ga__HPrQ3n6tbbw9Dmz1pMb4qJdFIUollUA',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZ3djcmxhZHhyaXRsY2JkbHhpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzM2NzQ0MywiZXhwIjoyMDQyOTQzNDQzfQ.xDoZtztiNQohsdJR8tPoi65V2LNBpmOjJyrMBKcV1GA',
  },
});
