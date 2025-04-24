
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Placeholder login function - would integrate with actual auth in production
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  const login = async (email: string, password: string) => {
    // Simulate setting up a database and fetching data
    const dummyDatabase = [
      {
        id: "YE-2023-4872",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        memberSince: "January 2023",
        role: "Youth Leader",
        imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      },
      {
        id: "YE-2023-5789",
        name: "Sarah Williams",
        email: "sarah.williams@example.com",
        memberSince: "March 2023",
        role: "Youth Member",
        imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      }
    ];

    const userData = dummyDatabase.find((user) => user.email === email);
    if(userData){
      const {name,email,id,memberSince,role,imageUrl} = userData;
      setUser({name,email,id,memberSince,role,imageUrl});
      setIsLoggedIn(true);
    }
    return true;
  };
  
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };
  
  return { isLoggedIn, user, login, logout };
};

const IDCardPage = () => {
  const { isLoggedIn, user, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    // In a real app, we'd validate credentials with a backend
    const success = login(email, password);
    if (!success) {
      setError("Invalid credentials");
    } else {
      setError("");
    }
  };
  
  const handlePayment = () => {
    // In a real app, this would integrate with Razorpay
    alert("In a production environment, this would open the Razorpay payment interface.");
    setPaymentInitiated(true);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Youth Empire ID Card</h1>
        <p className="text-gray-600 text-center mb-10">
          Your passport to exclusive opportunities and resources for young leaders.
        </p>
        
        {isLoggedIn ? (
          <div className="space-y-10">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-youth-purple to-youth-teal p-8 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Youth Empire</h2>
                    <p className="text-white/80">Official Member ID Card</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-white/80">Member Since</span>
                    <span className="font-medium">{user.memberSince}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="rounded-xl overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={user.imageUrl} 
                        alt={user.name} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{user.name}</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-500 block">ID Number</span>
                        <span className="font-medium text-gray-800">{user.id}</span>
                      </div>
                      
                      <div>
                        <span className="text-sm text-gray-500 block">Role</span>
                        <span className="font-medium text-gray-800">{user.role}</span>
                      </div>
                      
                      <div>
                        <span className="text-sm text-gray-500 block">Email</span>
                        <span className="font-medium text-gray-800">{user.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 flex flex-col items-center">
                  <div className="w-full bg-gray-100 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">ID Card Status:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        paymentInitiated ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                      }`}>
                        {paymentInitiated ? "Processing" : "Payment Required"}
                      </span>
                    </div>
                    
                    {!paymentInitiated && (
                      <p className="text-gray-600 text-sm mb-4">
                        Complete your payment to receive your physical ID card and unlock all member benefits.
                      </p>
                    )}
                    
                    {paymentInitiated ? (
                      <div className="bg-green-50 border border-green-200 rounded p-4 text-sm text-green-800">
                        Thank you for your payment! Your ID card is being processed and will be delivered to your registered address.
                      </div>
                    ) : (
                      <Button 
                        className="w-full" 
                        onClick={handlePayment}
                      >
                        Pay ₹499 via Razorpay
                      </Button>
                    )}
                  </div>
                  
                  <Button variant="outline" onClick={logout}>
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">ID Card Benefits</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-youth-purple/10 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-youth-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Exclusive Access</h4>
                    <p className="text-sm text-gray-600">To events, workshops, and networking opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-youth-purple/10 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-youth-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Priority Mentorship</h4>
                    <p className="text-sm text-gray-600">Connect with industry leaders and experts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-youth-purple/10 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-youth-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Early Access</h4>
                    <p className="text-sm text-gray-600">Be the first to know about new opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-youth-purple/10 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-youth-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Customized Programs</h4>
                    <p className="text-sm text-gray-600">Tailored to your goals and interests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Card className="border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle>Account Access</CardTitle>
              <CardDescription>
                Login or create an account to apply for your Youth Empire ID Card.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="text-sm text-youth-purple hover:text-youth-teal">
                          Forgot password?
                        </a>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button type="submit" className="w-full">Login</Button>
                  </form>
                </TabsContent>
                <TabsContent value="register">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <Input id="reg-email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Password</Label>
                      <Input id="reg-password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full">Create Account</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="border-t bg-gray-50 flex justify-center p-6">
              <p className="text-center text-sm text-gray-600">
                By registering, you agree to our{" "}
                <a href="#" className="text-youth-purple hover:text-youth-teal underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-youth-purple hover:text-youth-teal underline">
                  Privacy Policy
                </a>
              </p>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default IDCardPage;
