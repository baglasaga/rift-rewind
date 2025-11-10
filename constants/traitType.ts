export const TRAITS: TraitType[] = [
    { name: "Kill Securer", image: "/images/kill-securer.jpg", description: "You have high kills for how much damage you do. The opportunistic assassin. You snatch kills with surgical precision and swoop in for stolen assists like a cunning shadow." },
    { name: "The Conqueror", image: "/images/conquer.jpg", description: "With over 55% and high objective damage, you are a conquerer. You don’t just fight—you dominate towers, dragons, and barons, leaving a trail of victory in your wake." },
    { name: "Glass Cannon", image: "/images/glass-cannon.jpg", description: "The thrill seeker. High kills, high deaths—you live on the edge, swinging hard but paying the price for your daring plays." },
    { name: "The Warden", image: "/images/ward.png", description: "With vision score like yours, you are the watchful guardian. You see all, ward all, and leave the map illuminated, as if your eyes are everywhere at once." },
    { name: "Yuumi’s Yuumi", image: "/images/yuumi.jpg", description: "You take low damage, and have over 70% of the team's assists. The ultimate team player. You stay safe, shield and assist your allies endlessly, and let them shine while quietly racking up assists." },
    { name: "Pocket Support", image: "/images/pocket-support.jpg", description: "The invisible hero. Your shields and heals protect your carries like a guardian angel, often unnoticed but absolutely essential." },
    { name: "Generational Wealth", image: "/images/ping.png", description: "The money magnet. With high CS and gold learned, you farm like a pro, stack gold like a banker, and leave your team awed by your economic prowess." },
    { name: "Cash Cow", image: "/images/generational-wealth.jpg", description: "Side-laning monster, the gold-hoarding aficionado. You might not fight much, but your minion-minding skills are legendary, and your wallet is always fat." },
    { name: "KDA Player", image: "/images/kda.png", description: "The numbers enthusiast: high kills and low deaths. You maximize your kills and assists while caring little for objectives; efficiency is your art." },
    { name: "The One-Trick Pony", image: "/images/one-trick.jpg", description: "Loyal to one champion and one champion only in over 70% of your games. You ride your chosen hero into every battle with unshakable devotion." },
    { name: "Flex Master", image: "/images/flex.jpg", description: "The versatile virtuoso. You can do it all: top, jungle, mid, bot, support—your adaptability knows no bounds." },
    { name: "Singleplayer Only", image: "/images/solo.jpg", description: "The lone wolf. You farm, you siege, you shine in your own corner of the map—cooperation is optional, glory is mandatory." },
    { name: "Potential Man", image: "/images/potential-man.jpg", description: "The almost-legend. Crushing damage, brilliant kills—but somehow, victory slips through your fingers, losing over half your games. The promise is there… someday." },
    { name: "Snowball Fighter", image: "/images/snowball.jpg", description: "The sprinter. Short, explosive games under 25 minutes are your playground—you dive in, crush quickly, and leave before the map cools down." },
    { name: "The Staller Supreme", image: "/images/stall.jpg", description: "The patient tactician. Games are a marathon for you, averaging 35 minutes or more, savoring every moment while others rush toward the end." },
    { name: "Monkey D. Luffy", image: "/images/luffy.jpg", description: "The treasure hunter. You collect bounties like a pirate king, laughing in the face of danger as gold flows into your pocket." },
    { name: "Rage Quitter", image: "/images/rage-quitter.png", description: "The tempest. When things go south, you vanish in under 20 minutes like a puff of smoke, leaving bad stats and slightly tilted teammates behind." },
];

export type TraitType = {
    name: string,
    image: string,
    description: string
}