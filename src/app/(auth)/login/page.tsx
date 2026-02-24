import { Button } from "@/components/ui/button";
export default function Login() {
  return (
    <header className="flex items-center justify-between p-2 bg-white">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </header>
  );
}
