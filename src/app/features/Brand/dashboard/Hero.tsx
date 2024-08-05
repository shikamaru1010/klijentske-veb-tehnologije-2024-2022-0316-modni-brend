import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Hero() {
  return (
    
      <section className="section-hero">
            <div className="hero">
                <h1 className="heading-primary">Feel the SPACE</h1>
                <h2 className="heading-secondary">We empower individuals to express their unique identities boldly.</h2>

                <Button className="hero-btn-getstarted"size='huge' inverted as={Link} to="/Brand">
                Get started
                </Button>
            </div>
        </section>
    
  )
}
