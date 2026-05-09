"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event !== "SIGNED_IN" || !session) return;

      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect");

      if (redirect) {
        window.location.href = redirect;
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return children;
}
