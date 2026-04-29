export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  age: number | null;
  weight_kg: number | null;
  height_cm: number | null;
  health_goals: string[] | null;
  dietary_restrictions: string[] | null;
  created_at: string;
  updated_at: string;
}

export interface HabitLog {
  id: string;
  user_id: string;
  habit_name: string;
  completed: boolean;
  logged_at: string;
  notes: string | null;
}

export interface WellnessPlan {
  id: string;
  user_id: string;
  plan_type: 'nutrition' | 'fitness' | 'supplement' | 'general';
  content: string;
  generated_at: string;
  is_active: boolean;
}

export interface SupplementRecommendation {
  id: string;
  user_id: string;
  supplement_name: string;
  dosage: string;
  timing: string;
  reason: string;
  created_at: string;
}
