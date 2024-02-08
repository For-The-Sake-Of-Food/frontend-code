import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center pt-20"
    style={{
      backgroundImage: 'url("./signin.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Optional: Set a minimum height to cover the entire viewport
    }} 
    >
      <SignUp />
    </div>
  );
}
