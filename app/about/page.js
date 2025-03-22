import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-12 bg-gray-50">
      <Card className="max-w-2xl text-center">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            We are dedicated to delivering your favorite meals from the best restaurants straight to your doorstep. Our mission is to make food delivery fast, convenient, and affordable for everyone.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
