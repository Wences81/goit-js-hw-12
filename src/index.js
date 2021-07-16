import './css/styles.css';
import countryCardTpl from "../src/templates/country-card.hbs";
import countriesTpl from "../src/templates/countries.hbs";
import API from "./js/fetchCountry"
import getRefs from "./js/get-refs";


const DEBOUNCE_DELAY = 300;