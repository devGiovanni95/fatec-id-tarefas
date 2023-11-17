import { Button, Center, Grid, GridItem } from "@chakra-ui/react"
import { ITarefa } from "../../interfaces/tarefa"

interface Props {
    tarefas: ITarefa[]
    remover: (id: number) => void
    alterar: (tarefa: ITarefa) => void
}

export default function ListaTarefas({tarefas,remover,alterar}: Props) {
    return (
        <ul>
            {
                tarefas.map((tarefa) => (
                        <Center mt={4 }>
                            <li>
                                <Grid  templateColumns='repeat(5, 1fr)' gap={6}>
                                <GridItem colSpan={3} w='100%' h='10' >
                                    {tarefa.title}
                                </GridItem>

                                <GridItem colSpan={1} w='100%' h='10' >
                                        <Button 
                                        onClick={() => alterar(tarefa)}
                                        colorScheme={tarefa.completed ? 'green' : 'orange'}>
                                            {tarefa.completed ? 'Realizada' : 'Pendente'}
                                        </Button>
                                </GridItem>

                                <GridItem colSpan={1} w='100%' h='10' >
                                    <Button colorScheme='red' onClick={() => remover(tarefa.id)}>
                                        Excluir
                                    </Button>
                                </GridItem>

                                </Grid>
                            </li>

                        </Center>
                ))
            }
        </ul>
    )
}