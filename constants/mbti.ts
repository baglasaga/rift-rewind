export type MBTILetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type MBTIType = 'ENFP';

export const MBTI_INFO: Record<MBTILetter, { label: string; description: string; traits: string[] }> = {
    E: { label: 'Extroversion', description: 'text', traits: ['Kill Securer', 'The Conqueror', 'Glass Cannon'] },
    I: { label: 'Introversion', description: 'text', traits: ['The Warden', "Yuumi’s Yuumi", 'Pocket Support'] },
    S: { label: 'Sensing', description: 'text', traits: ['Retail Therapy', 'Cash Cow', 'KDA Player'] },
    N: { label: 'Intuition', description: 'text', traits: ['The One-Trick Pony', 'Flex Master', 'Singleplayer Only'] },
    T: { label: 'Thinking', description: 'text', traits: ['Potential Man', 'The Conqueror', 'Snowball Fighter'] },
    F: { label: 'Feeling', description: 'text', traits: ['Pocket Support', "Yuumi’s Yuumi", 'The Warden'] },
    J: { label: 'Judging', description: 'text', traits: ['The One-Trick Pony', 'Retail Therapy', 'The Staller Supreme'] },
    P: { label: 'Perceiving', description: 'text', traits: ['Monkey D. Luffy', 'Glass Cannon', 'Rage Quitter'] },
};

export const MBTI_TYPES: Record<MBTIType, any> = {
    ENFP: {
        description: 'ENFPs are enthusiastic, fun, and lively. Having an ENFP on the team will guarantee you keep playing even after a 10x losing streak.',
        analysis: 'ENFP personalities carry an interesting blend of carefree sociability, sparkling imagination, and deep, contemplative introspection. They regularly use their natural curiosity and expansive creativity to try to better understand themselves and the complex dynamics of human relationships. And they are truly devoted to nurturing their relationships with and their understanding of the world at large.'
    }
}
