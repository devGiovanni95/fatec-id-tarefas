import { Button, Container, Input } from "@chakra-ui/react"
import Layout from "../../components/Layout"
import { /*useEffect,*/ useState } from "react"
import { ITarefa } from "../../interfaces/tarefa"
import ListaTarefas from "../../components/ListaTarefas"
import api from "../../helpers/axios"
import { useTarefas } from "../../hooks/queries/tarefas"
import { useMutateDeleteTarefa, useMutateTarefa } from "../../hooks/mutations/tarefas"

export default function Tarefas() {
  //const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const {
    data: tarefas, 
    refetch: refetchTarefas
  } = useTarefas()

      const {mutate, isPending} = useMutateTarefa()
      
      const {mutate: deleteMutate} = useMutateDeleteTarefa()
      const [inputNome, setInputNome] = useState('')
      
      function adicionarTarefa() {
        if(inputNome != ''){
          const novaTarefa = {
            title: inputNome,
            completed: false
          }          
          mutate(novaTarefa,{
            onSuccess: () => refetchTarefas()
          })
     }
  }

  function removerTarefa(id: number) {
    // api.delete(`/task/${id}`).then(() => {
    //   refetchTarefas()
    // })
    deleteMutate(id, {
      onSuccess: () => {
        refetchTarefas()
      }
    })
  }

  function alterarStatusTarefa(tarefa: ITarefa){
    tarefa.completed = !tarefa.completed
    api.put(`/task/${tarefa.id}`,tarefa).then(() => {
      refetchTarefas()
    }).catch((erro) => console.log(erro))
  }

  return (
    <Layout>
      <Container maxWidth='container.lg'>
        <h1>Lista de tarefas</h1>
        <Input type="text"
          onChange={(evento) => setInputNome(evento.target.value)}
          value={inputNome} />

        <Button onClick={adicionarTarefa} isLoading={isPending}
          colorScheme="blue">Adicionar</Button>
        <hr />

        {
          tarefas && (
            <ListaTarefas
              tarefas={tarefas}
              remover={removerTarefa}
              alterar={alterarStatusTarefa} />
          )
        }
        <Button>Mudar tarefas</Button>
      </Container>
    </Layout>
  )
}