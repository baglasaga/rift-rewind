export type MBTILetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type MBTIType = 'ENFP';

export const MBTI_LETTERS: Record<MBTILetter, string> = {
    E: 'Extroversion',
    I: 'Introversion',
    S: 'Sensing',
    N: 'Intuition',
    T: 'Thinking',
    F: 'Feeling',
    J: 'Judging',
    P: 'Perceiving',
};

export const MBTI_DESCRIPTIONS: Record<MBTILetter, string> = {
    E: '',
    I: '',
    S: '',
    N: '',
    T: '',
    F: '',
    J: '',
    P: '',
};

export const MBTI_TYPES: Record<MBTIType, any> = {
    ENFP: {
        description: 'ENFPs are enthusiastic, fun, and lively. Having an ENFP on the team will guarantee you keep playing even after a 10x losing streak.',
        analysis: 'ENFP personalities carry an interesting blend of carefree sociability, sparkling imagination, and deep, contemplative introspection. They regularly use their natural curiosity and expansive creativity to try to better understand themselves and the complex dynamics of human relationships. And they are truly devoted to nurturing their relationships with and their understanding of the world at large.'
    }
}
