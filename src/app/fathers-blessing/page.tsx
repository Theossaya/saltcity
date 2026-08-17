import { redirect } from "next/navigation";

// TEMPORARY: registration is closed (the event is here), and the homepage now
// carries the full announcement. Old shared links land there instead of on a
// dead form. To restore the registration page after the event:
//   git checkout <commit-before-this-change> -- src/app/fathers-blessing/page.tsx
export default function FathersBlessingRedirect() {
  redirect("/");
}
