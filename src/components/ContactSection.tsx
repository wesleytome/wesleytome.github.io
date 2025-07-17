import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
          Let's Talk
        </h2>
        <p className="text-xl text-muted-foreground">
          Interested in a partnership? Get in touch with me
        </p>
      </div>

      <Card className="border-0 shadow-xl">
        <CardContent className="p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Message subject" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea 
                id="message" 
                rows={6} 
                placeholder="Your message..."
                className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactSection;