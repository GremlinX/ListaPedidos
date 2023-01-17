import React, { useState } from "react";
import {Col, Card, Button, DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap';
import styles from './aula02.module.css'
import Pedidos from "./pedidos";

const itensCardapio = [
    { id: 1, nome: 'Mocha', preco: 2.00, 
    descricao: 'açúcar, cacau em pó sem açúcar, café forte, leite semi-desnatado.' }
    , { id: 2, nome: 'Capuccino', preco: 5.00,
    descricao: 'leite em pó, café solúvel, açúcar, chocolate em pó 50% cacau, bicarbonato, canela em pó' }
    , { id: 3, nome: 'Sanduíche', preco: 8.00,
    descricao: 'carne magra moída, cebola e alho desidratados, cheiro verde fresco, sal, pimenta-do-reino, queijo prato, queijo cheddar, tomate, pão, alface americana, mostarda, catchup, maionese ' }
    , { id: 4, nome: 'Bacon & Ovos', preco: 5.00,
    descricao: 'Bacon, Ovos' }
    , { id: 5, nome: 'Chá verde com gengibre', preco: 3.00,
    descricao: 'água, chá verde, gengibre' }
    , { id: 6, nome: 'Bolo de laranja', preco: 6.50,
    descricao: 'ovos, margarina, açucar, farinha de trigo, suco de laranja, fermento' }
    , { id: 7, nome: 'Misto Quente', preco: 5.50,
    descricao: 'pão, presunto, queijo prato, alface, tomate' }
    , { id: 8, nome: 'Sucos', preco: 7.00,
    descricao: 'Laranja, Morango, Cajú, Maça, Abacaxi' }
    , { id: 9, nome: 'Batata Recheada', preco: 25.00,
    descricao: 'Batata, Sal, Pimenta-do-reino, Ovo, Bacon, Creme de leite, cebolinha' }
];

function Cardapio() {
    // Hook para controlar os pedidos.
    const [listaDePedidos, setListaDePedidos] = useState([]);
    // Hook para controlar o valor total do pedido.
    const [valor, setValor] = useState(0);
    // Hook para controlar aparição do Cardápio
    const [isShowingCardapio, setCardapio] = useState(true);
    // Hook para controlar aparição do Cardápio
    const [isShowingPedidos, setPedidos] = useState(true);
    
    // Função para controlar os pedidos adicionados na lista.
    function adicionaItemPedido(event){
        const idPedido = event.target.id;
        // Adicionar no array listaDePedidos, o objeto do array itensCardapio (push não deu certo)
        const update = listaDePedidos.concat(itensCardapio[idPedido - 1]);
        // Atualiza a listaDePedidos. (Necessário para atualizar também o componente "Pedidos")
        setListaDePedidos(update);
        // Pegar posição do itensCardapio = console.log(itensCardapio[idPedido - 1])
        // Visualizar os itens do array listaDePedidos = console.log(listaDePedidos)
        const somaPreco = valor + itensCardapio[idPedido -1].preco
        setValor(somaPreco)
    }
    // Função para apagar todos os itens da lista.
    function apagarLista() {
        // setListaDePedidos([]);
        listaDePedidos.length = 0; // Remover todos os itens do array.
        setValor(0);
    }
    // Função para mostrar / esconder o cardapio
    function handleCardapio() {
        setCardapio(!isShowingCardapio);
    }
    // Função para mostrar / esconder o lista de pedidos
    function handlePedidos() {
        setPedidos(!isShowingPedidos);
    }

    return (
        <app-cardapio>
        
            <ButtonGroup>
                { isShowingCardapio ? 
                    <Button variant="primary" onClick={handleCardapio}>Esconder Cardápio</Button> 
                    : 
                    <Button variant="primary" onClick={handleCardapio}>Mostrar Cardápio</Button>
                }
                { isShowingPedidos ? 
                    <Button variant="secondary" onClick={handlePedidos}>Esconder Pedidos</Button> 
                    : 
                    <Button variant="secondary" onClick={handlePedidos}>Mostrar Pedidos</Button>
                }
            </ButtonGroup>
            
            {isShowingCardapio ? 
                (
                    <div className={styles.customContainer}>
                        {itensCardapio.map(({ id, nome, preco, descricao}) => (
                        <div key={id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1857f5edfd1%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1857f5edfd1%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                                <Card.Body>
                                    <Card.Title>{id + '. '}{nome}</Card.Title>
                                    <Card.Text>R${preco}</Card.Text>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="outline-success" onClick={adicionaItemPedido} id={id}>Adicionar</Button>
                                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                        <Dropdown.Menu>
                                            <div className={styles.cardapioDescricao}>{descricao}</div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Body>
                            </Card>
                        </div>
                        ))}
                    </div>
                ) 
                : 
                null
            }

            {isShowingPedidos ? 
                (
                    <Pedidos 
                    hookVariablePedidos={listaDePedidos}
                    hookVariableValor={valor}
                    apagarLista={apagarLista}
                    hookFunctionLista={setListaDePedidos}
                    hookFunctionValor={setValor}
                    />
                )
                :
                null
            }

        </app-cardapio>
    );
}

export default Cardapio;
