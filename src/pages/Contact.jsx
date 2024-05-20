import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const Contact = () => {
  const inputStyle = {
    backgroundColor: "#F9FAFB", 
    borderRadius: "9px",
    border: "3px solid #ECEFF1",
  };

  const placeholderStyle = {
    color: "#ECEFF1",
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="m-10 w-3/5 px-3">
        <div className="flex items-center gap-4 pb-4">
          <div className="w-full">
            <Label htmlFor="name" className="text-lg" >Name</Label>
            <Input type="name" id="name" placeholder="name" style={inputStyle} className="h-12 mt-2.5 text-lg" />
          </div>
          <div className="w-full">
            <Label htmlFor="lastname" className="text-lg">Lastname</Label>
            <Input type="lastname" id="lastname" placeholder="lastname" className="h-12 mt-2.5 text-lg" style={inputStyle} />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="text-lg">Email</Label>
          <Input type="email" id="email" placeholder="email" className="h-12 mt-2.5 mb-3 text-lg" style={inputStyle} />
          <Label htmlFor="phone" className="text-lg">Phone number</Label>
          <Input type="tel" id="phone" placeholder="Phone number" className="h-12 mt-2.5 mb-3 text-lg" style={inputStyle}/>        
          <Label htmlFor="message" className="text-lg">Message</Label>
          <Textarea placeholder="Type your message here." className="h-40 mt-2.5 text-lg " style={inputStyle} />

        </div>
      </div>
      <Button type="submit" className="w-64 h-12 bg-[#270b35] hover:bg-[#6a2c79] text-white text-lg rounded-full">Submit</Button>
    </div>
  )
}