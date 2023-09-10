//Specials.js
import GreekSalad from '../../assets/vegetable-salad.jpg';
import Bruschetta from '../../assets/bruschetta.jpeg';
import LemonDessert from '../../assets/lemon-dessert.webp';
import SpecialCard from './SpecialCard';
import '../../styles/sections/Specials.css'
import { Link } from "react-router-dom";


export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar" >
                <h1>This weeks specials</h1>
                <Link to="/menu" className="action-button">Online Menu</Link>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>
        </section>
    );
}