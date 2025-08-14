
import express, {Request, Response} from 'express'
import validationBr from 'validation-br'

const app = express();
const port: number = 3000;

app.use(express.json());
	
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});

app.use(express.json())

app.get('/valida-cpf/:cpf', (req: Request<{cpf:string}>, res: Response) => {
    if(validationBr.isCPF(req.params.cpf)) {
        return res.send('CPF válido')
    }else{
        return res.send('CPF inválido')
    }
})

