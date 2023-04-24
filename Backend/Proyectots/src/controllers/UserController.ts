import { Request, Response } from "express";
import { AbstractControllers } from "./AbstractControllers";

class UserController extends AbstractControllers {
    
    protected validateBody(type: any) {
        throw new Error("Method not implemented.");
    }

    //Singleton 
    // Atributo estático que armazena a instância da classe
    private static instance: UserController;
    // Metodo de clase
    public static getInstance(): UserController {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new UserController('user');
        return this.instance;
    }

    protected initRoutes(): void {
        this.router.get('/readUsers', this.getReadUsers.bind(this));
        this.router.post('/createUser', this.postCreateUser.bind(this));
        // Todas las rutas que se creen deben ser agregadas aqui
    }


    private getReadUsers(req: Request, res: Response) {
        res.status(200).send('Servicio de lectura de usuarios');
    }

    private postCreateUser(req: Request, res: Response) {
        res.status(200).send('Alta usuario');
    }
}

export default UserController