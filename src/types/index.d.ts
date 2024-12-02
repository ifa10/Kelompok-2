export type UserRole = "admin" | "member";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
    };
  }
}
