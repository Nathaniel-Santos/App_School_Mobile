import { create } from 'zustand';

export const usePermissions = create<{
  pai: number;
  mae: number;
  respFinanceiro: number;
  respPedagogico: number;
  setPermissions: (value: any) => void;
}>((set) => ({
  pai: 0,
  mae: 0,
  respFinanceiro: 0,
  respPedagogico: 0,
  setPermissions: (value) => set((_) => value),
}));

export const useAccountMode = create<{
  student: {
    Nome: string;
    Matricula: string;
    Turma: string;
    Curso: string;
  } | null;
  selectedStudent: {
    Nome: string;
    Matricula: string;
    Turma: string;
    Curso: string;
  } | null;
  studentsList:
    | { Nome: string; Matricula: string; Turma: string; Curso: string }[]
    | null;
  setStudent: (
    value: {
      Nome: string;
      Matricula: string;
      Turma: string;
      Curso: string;
    } | null
  ) => void;
  setSelectedStudent: (
    value: {
      Nome: string;
      Matricula: string;
      Turma: string;
      Curso: string;
    } | null
  ) => void;
  setStudentsList: (
    value:
      | { Nome: string; Matricula: string; Turma: string; Curso: string }[]
      | null
  ) => void;
}>((set) => ({
  student: null,
  selectedStudent: null,
  studentsList: null,
  setStudent: (value) => set((state) => ({ ...state, student: value })),
  setSelectedStudent: (value) =>
    set((state) => ({ ...state, selectedStudent: value })),
  setStudentsList: (value) =>
    set((state) => ({ ...state, studentsList: value })),
}));

export const useCustomization = create<{
  logoUrl: string;
  miniLogoUrl: string;
  switchColor: string;
  enterButtonColor: string;
  changeStudentTextColor: string;
  menuButtonColor: string;
  menuTagsColor: string;
  newsTagColor: string;
  backgroundHomeColor: string;
  setCustomization: (data: {
    logoUrl: string;
    miniLogoUrl: string;
    switchColor: string;
    enterButtonColor: string;
    changeStudentTextColor: string;
    menuButtonColor: string;
    menuTagsColor: string;
    newsTagColor: string;
    backgroundHomeColor: string;
  }) => void;
}>((set) => ({
  logoUrl:
    'https://media.discordapp.net/attachments/971787111470596136/1160832338758992002/Insight_Consultoria_-_colorlogo_1_2.png?ex=65643cdc&is=6551c7dc&hm=0f0bf460f2cd85561a5f010472e3ca77b57ae6e693627175c9730fa7511b5739&=',
  miniLogoUrl:
    'https://media.discordapp.net/attachments/971787111470596136/1160832338758992002/Insight_Consultoria_-_colorlogo_1_2.png?ex=65643cdc&is=6551c7dc&hm=0f0bf460f2cd85561a5f010472e3ca77b57ae6e693627175c9730fa7511b5739&=',
  switchColor: '#0961F5',
  enterButtonColor: '#00B83F',
  changeStudentTextColor: '#BC509A',
  menuButtonColor: '#10459F',
  menuTagsColor: '#10459F',
  newsTagColor: '#BC509A',
  backgroundHomeColor: '',

  setCustomization: (data) => set((_) => data),
}));

export const useShowSelectStudentModal = create<{
  opened: boolean;
  setSelectStudentModal: (value: any) => void;
}>((set) => ({
  opened: false,
  setSelectStudentModal: (value) => set((_) => ({ opened: value })),
}));

export const useShowNavBar = create<{
  isShown: boolean;
  setNavbarVisibility: (value: boolean) => void;
}>((set) => ({
  isShown: false,
  setNavbarVisibility: (value) => set((_) => ({ isShown: value })),
}));
