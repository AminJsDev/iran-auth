import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Input } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Label>Hello World</Label>
      <Input className="mb-2" />
      <Button>Login</Button>
    </>
  );
}
