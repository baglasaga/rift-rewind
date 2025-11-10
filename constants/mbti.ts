export type MBTILetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type MBTIType =
    | 'ENFP'
    | 'INFP'
    | 'ENFJ'
    | 'INFJ'
    | 'ENTP'
    | 'INTP'
    | 'ENTJ'
    | 'INTJ'
    | 'ESFP'
    | 'ISFP'
    | 'ESFJ'
    | 'ISFJ'
    | 'ESTP'
    | 'ISTP'
    | 'ESTJ'
    | 'ISTJ';

export const MBTI_INFO: Record<MBTILetter, { label: string; description: string; traits: string[] }> = {
    E: { 
        label: 'Extroversion', 
        description: 'Outgoing and action-oriented players who thrive in the heat of battle. They seek kills, push objectives, and love the spotlight, often swinging hard and leading fights.', 
        traits: ['Kill Securer', 'The Conqueror', 'Glass Cannon'] 
    },
    I: { 
        label: 'Introversion', 
        description: 'Observant and supportive players who prefer strategic influence over direct confrontation. They excel at vision, shielding allies, and quietly controlling the flow of the game.', 
        traits: ['The Warden', "Yuumi’s Yuumi", 'Pocket Support'] 
    },
    S: { 
        label: 'Sensing', 
        description: 'Practical and detail-focused players who excel at farming, managing resources, and keeping track of concrete in-game metrics. They play efficiently and maximize tangible results.', 
        traits: ['Generational Wealth', 'Cash Cow', 'KDA Player'] 
    },
    N: { 
        label: 'Intuition', 
        description: 'Creative and adaptable players who enjoy variety, experimentation, and unconventional strategies. They may focus on a single champion or flex across many roles, exploring possibilities.', 
        traits: ['The One-Trick Pony', 'Flex Master', 'Singleplayer Only'] 
    },
    T: { 
        label: 'Thinking', 
        description: 'Strategic and analytical players who focus on performance and objective impact. They often prioritize high damage, efficient kills, and calculated risks over purely social or emotional play.', 
        traits: ['Potential Man', 'The Conqueror', 'Snowball Fighter'] 
    },
    F: { 
        label: 'Feeling', 
        description: 'Empathetic and team-oriented players who prioritize supporting allies, keeping teammates alive, and contributing to the overall team experience rather than just personal stats.', 
        traits: ['Pocket Support', "Yuumi’s Yuumi", 'The Warden'] 
    },
    J: { 
        label: 'Judging', 
        description: 'Organized and goal-focused players who plan their approach and stick to their strategies. They excel at focused mastery, predictable play, and long-term objectives in matches.', 
        traits: ['The One-Trick Pony', 'Retail Therapy', 'The Staller Supreme'] 
    },
    P: { 
        label: 'Perceiving', 
        description: 'Flexible and spontaneous players who thrive in chaotic situations. They adapt on the fly, take risks, enjoy variety, and often prioritize immediate gains and fun over strict planning.', 
        traits: ['Monkey D. Luffy', 'Glass Cannon', 'Rage Quitter'] 
    },
};


export const MBTI_TYPES: Record<MBTIType, any> = {
    ENFP: {
        description: 'ENFPs are enthusiastic, fun, and lively. Having an ENFP on the team will guarantee you keep playing even after a 10x losing streak.',
    },
    INFP: {
        description: 'INFPs are idealistic and deeply loyal. They’ll stick with the team through thick and thin, always believing in the comeback.',
    },
    ENFJ: {
        description: 'ENFJs are charismatic leaders who rally the squad with inspiring pep talks and clutch plays when morale dips.',
    },
    INFJ: {
        description: 'INFJs are quiet strategists. They see the big picture and guide the team with subtle but powerful insights.',
    },
    ESTP: {
        description: 'ESTPs are bold and reactive. They dive into action without hesitation and make split-second plays that leave everyone stunned.',
    },
    ISTP: {
        description: 'ISTPs are cool-headed tacticians. They analyze the situation mid-match and execute with surgical precision.',
    },
    ESFP: {
        description: 'ESFPs bring the party to the game. Their energy is contagious, and they make every match feel like a highlight reel.',
    },
    ISFP: {
        description: 'ISFPs are quiet artists of gameplay. Their moves are graceful, unexpected, and often game-changing.',
    },
    ENTP: {
        description: 'ENTPs are creative disruptors. They invent wild strategies on the fly and keep opponents guessing with unpredictable plays.',
    },
    INTP: {
        description: 'INTPs are cerebral players. They theorycraft between matches and find clever exploits that others overlook.',
    },
    ENTJ: {
        description: 'ENTJs are commanding and decisive. They take charge, call the shots, and push the team toward victory with relentless drive.',
    },
    INTJ: {
        description: 'INTJs are master planners. They map out the win conditions before the match even starts and execute with icy precision.',
    },
    ESTJ: {
        description: 'ESTJs are efficient organizers. They keep the team focused, structured, and on-task—even in chaotic matches.',
    },
    ISTJ: {
        description: 'ISTJs are reliable anchors. They know their role, play it flawlessly, and never tilt under pressure.',
    },
    ESFJ: {
        description: 'ESFJs are supportive and team-oriented. They make sure everyone’s in sync and boost morale with their steady presence.',
    },
    ISFJ: {
        description: 'ISFJs are quiet protectors. They notice what others miss and step in to save the day when it matters most.',
    },
};
