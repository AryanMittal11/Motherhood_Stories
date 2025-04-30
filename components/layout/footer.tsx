export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Motherhood Stories</h3>
            <p className="text-muted-foreground">
              Celebrating mothers and their incredible journeys through heartfelt stories and insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/#stories" className="text-muted-foreground hover:text-primary transition">Stories</a></li>
              <li><a href="/#health" className="text-muted-foreground hover:text-primary transition">Health</a></li>
              <li><a href="/#inspiration" className="text-muted-foreground hover:text-primary transition">Inspiration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">
              Sign up for our newsletter to receive the latest stories and updates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Motherhood Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}