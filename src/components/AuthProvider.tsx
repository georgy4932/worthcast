"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          // Session established — check for redirect
          const params = new URLSearchParams(window.location.search);
          const redirect = params.get("redirect");
          if (redirect) {
            window.location.href = redirect;
          }
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return <>{children}</>;
}
