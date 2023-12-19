import 'dotenv/config'
import z from "zod"

const EnvSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(3333)
})

 const _env = EnvSchema.safeParse(process.env)

 if(_env.success === false){
    console.error("Variaveis de ambientes inválidas", _env.error.format())
    throw new Error("variaveis de ambiente inválidas")
 }

 export const env = _env.data