// Import Greek god icons
import zeus_icon from './zeus-icon.svg';
import hera_icon from './hera-icon.svg';
import poseidon_icon from './poseidon-icon.svg';
import demeter_icon from './demeter-icon.svg';
import athena_icon from './athena-icon.svg';
import apollo_icon from './apollo-icon.svg';
import artemis_icon from './artemis-icon.svg';
import ares_icon from './ares-icon.svg';
import aphrodite_icon from './aphrodite-icon.svg';
import hephaestus_icon from './hephaestus-icon.svg';
import hermes_icon from './hermes-icon.svg';
import dionysus_icon from './dionysus-icon.svg';
import hades_icon from './hades-icon.svg';
import persephone_icon from './persephone-icon.svg';
import nyx_icon from './nyx-icon.svg';
import eos_icon from './eos-icon.svg';
import helios_icon from './helios-icon.svg';
import selene_icon from './selene-icon.svg';
import thanatos_icon from './thanatos-icon.svg';

// Import UI & other assets
import logo from './logo.png';
import hero_img from './hero_img.png';
import cart_icon from './cart_icon.png';
import bin_icon from './bin_icon.png';
import dropdown_icon from './dropdown_icon.png';
import exchange_icon from './exchange_icon.png';
import profile_icon from './profile_icon.png';
import quality_icon from './quality_icon.png';
import search_icon from './search_icon.png';
import star_dull_icon from './star_dull_icon.png';
import star_icon from './star_icon.png';
import support_img from './support_img.png';
import menu_icon from './menu_icon.png';
import about_img from './about_img.png';
import contact_img from './contact_img.png';
import razorpay_logo from './razorpay_logo.png';
import stripe_logo from './stripe_logo.png';
import cross_icon from './cross_icon.png';

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
};

// Define Greek God "products"
export const products = [
    { _id: "g001", name: "Zeus - King of the Gods", description: "Ruler of Olympus, master of thunder.", price: 4999000, image: [zeus_icon], category: "Olympian", subCategory: "Decree", variants: ["Thunderbolt", "Stormcaller", "Skyfather"], bestseller: true },
    { _id: "g002", name: "Hera - Queen of the Gods", description: "Protector of marriage and women.", price: 899000, image: [hera_icon], category: "Olympian", subCategory: "Favor", variants: ["Peacock's Grace", "Golden Crown"], bestseller: false },
    { _id: "g003", name: "Poseidon - God of the Sea", description: "Master of oceans, earthquakes, and storms.", price: 899000, image: [poseidon_icon], category: "Olympian", subCategory: "Decree", variants: ["Trident of Power", "Tsunami Bringer"], bestseller: false },
    { _id: "g004", name: "Demeter - Goddess of Harvest", description: "Bringer of seasons and fertility.", price: 799000, image: [demeter_icon], category: "Olympian", subCategory: "Favor", variants: ["Golden Grain", "Harvest Bounty"], bestseller: true },
    { _id: "g005", name: "Athena - Goddess of Wisdom", description: "Strategist and protector of heroes.", price: 799000, image: [athena_icon], category: "Olympian", subCategory: "Decree", variants: ["Aegis Shield", "Owl of Insight"], bestseller: true },
    { _id: "g006", name: "Apollo - God of the Sun & Music", description: "Bringer of light, prophecy, and art.", price: 899000, image: [apollo_icon], category: "Olympian", subCategory: "Favor", variants: ["Lyre of Harmony", "Sunfire Bow"], bestseller: true },
    { _id: "g007", name: "Artemis - Goddess of the Hunt", description: "Protector of nature and wilderness.", price: 850000, image: [artemis_icon], category: "Olympian", subCategory: "Decree", variants: ["Moonlit Arrows", "Silver Bow"], bestseller: false },
    { _id: "g008", name: "Ares - God of War", description: "Unmatched in battle and bloodshed.", price: 750000, image: [ares_icon], category: "Olympian", subCategory: "Decree", variants: ["Spartan Fury", "Bloodthirsty Spear"], bestseller: false },
    { _id: "g009", name: "Aphrodite - Goddess of Love", description: "The essence of beauty and passion.", price: 850000, image: [aphrodite_icon], category: "Olympian", subCategory: "Favor", variants: ["Golden Apple", "Rose of Desire"], bestseller: true },
    { _id: "g010", name: "Hephaestus - God of Forge", description: "Master craftsman of gods and mortals.", price: 750000, image: [hephaestus_icon], category: "Olympian", subCategory: "Decree", variants: ["Magma Hammer", "Divine Smith"], bestseller: false },
    { _id: "g011", name: "Hermes - Messenger of the Gods", description: "Swift and clever, guide of travelers.", price: 799000, image: [hermes_icon], category: "Olympian", subCategory: "Favor", variants: ["Winged Sandals", "Caduceus Staff"], bestseller: false },
    { _id: "g012", name: "Dionysus - God of Wine & Celebration", description: "Bringer of joy and endless revelry.", price: 899000, image: [dionysus_icon], category: "Olympian", subCategory: "Favor", variants: ["Grapevine Chalice", "Ecstasy Blessing"], bestseller: false },
    { _id: "g013", name: "Hades - Lord of the Underworld", description: "Guardian of the dead, ruler of souls.", price: 799000, image: [hades_icon], category: "Underworld", subCategory: "Decree", variants: ["Helm of Invisibility", "Underworld Dominion"], bestseller: false },
    { _id: "g014", name: "Persephone - Queen of the Underworld", description: "Bringer of seasons, wife of Hades.", price: 799000, image: [persephone_icon], category: "Underworld", subCategory: "Favor", variants: ["Pomegranate Bond", "Spring & Winter Duality"], bestseller: false },
    { _id: "g015", name: "Nyx - Goddess of the Night", description: "Shrouded in mystery, ruler of darkness.", price: 950000, image: [nyx_icon], category: "Primordial", subCategory: "Decree", variants: ["Eternal Shadow", "Cosmic Veil"], bestseller: false },
    { _id: "g016", name: "Eos - Goddess of Dawn", description: "Bringer of the first light of day.", price: 750000, image: [eos_icon], category: "Primordial", subCategory: "Favor", variants: ["Aurora Glow", "Morning Radiance"], bestseller: false },
    { _id: "g017", name: "Helios - God of the Sun", description: "Drives the chariot of the sun across the sky.", price: 850000, image: [helios_icon], category: "Primordial", subCategory: "Decree", variants: ["Solar Chariot", "Burning Gaze"], bestseller: false },
    { _id: "g018", name: "Selene - Goddess of the Moon", description: "Illuminates the night, sister of Helios.", price: 850000, image: [selene_icon], category: "Primordial", subCategory: "Favor", variants: ["Lunar Crown", "Silver Glow"], bestseller: false },
    { _id: "g019", name: "Thanatos - God of Death", description: "Gentle guide to the afterlife.", price: 750000, image: [thanatos_icon], category: "Underworld", subCategory: "Decree", variants: ["Eternal Rest", "Silent Passage"], bestseller: false }
];

