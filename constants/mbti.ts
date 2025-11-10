export type MBTILetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type MBTIType = 'ENFP';

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
        analysis: 'ENFP personalities carry an interesting blend of carefree sociability, sparkling imagination, and deep, contemplative introspection. They regularly use their natural curiosity and expansive creativity to try to better understand themselves and the complex dynamics of human relationships. And they are truly devoted to nurturing their relationships with and their understanding of the world at large.'
    }
}
