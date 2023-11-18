import {ReactNode} from 'react'
export interface user {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface componentWithChildren {
  children:ReactNode
}