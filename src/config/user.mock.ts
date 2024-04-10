import { AuthUser } from "@/features/auth";

export const USER: AuthUser = {
    id: '123',
    email: 'test@test.com',
    role: 'USER',
    lists: [{
        id: 1,
        title: 'Lista de seguimiento',
        films: []
    }]
}