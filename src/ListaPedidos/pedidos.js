import React from "react";
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import styles from './aula02.module.css'

function Pedidos({ hookVariablePedidos, hookVariableValor, apagarLista, hookFunctionLista, hookFunctionValor }) {
    
    const apagaItem = (index, e) => {
        hookFunctionLista(hookVariablePedidos.filter((v, i) => i !== index));
        const itemPreco = e.target.value;
        hookFunctionValor(hookVariableValor - itemPreco);
    }

    return (
        <app-pedidos>
            <div className="px-4 my-5">
                <h1 className="display-5 fw-bold text-center">Pedidos selecionados</h1>
                
                    <Table striped bordered hover>
                        <thead>
                            <tr className="text-center">
                                <th>ORDEM</th>
                                <th>ID</th>
                                <th>ITEM</th>
                                <th>VALOR (R$)</th>
                                <th>AÇÃO</th>
                            </tr>
                        </thead>
                        <tbody>
                        {hookVariablePedidos.map(({id, nome, preco, descricao}, index) => (
                            <tr key={id}>
                                <td>{index+1}</td>
                                <td>{id}</td>
                                <td>{nome}</td>
                                <td>{preco}</td>
                                <td className="text-center">
                                    <Button variant="danger" size="sm" value={preco} onClick={e => apagaItem(index, e)}>Excluir</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <div className={styles.navBody}>  
                        Valor total: R${hookVariableValor}
                        <Button variant="outline-danger" onClick={apagarLista}>Limpar pedido</Button>
                    </div> 
            </div>
        </app-pedidos>
    );
}

export default Pedidos;