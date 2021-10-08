import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import tweetsService from '../Services/tweetsService';

const TweetForm = ({ tweets, setTweets }) => {
    const [autor, setAutor] = useState('');
    const [texto, setTexto] = useState('');
    const [tipo, setTipo] = useState('');
    const [notificacion, setNotificacion] = useState('');

    const inputWidth = {
        width: '60%',
    };

    const handleSetAutor = ({ target }) => setAutor(target.value);
    const handleSetTexto = ({ target }) => setTexto(target.value);
    const handleSetTipo = ({ target }) => setTipo(target.value);

    const publicar = async (event) => {
        event.preventDefault();
        const nuevo_tweet = { author: autor, content: texto, type: tipo };
        if (nuevo_tweet.author && nuevo_tweet.content) {
            tweetsService
                .publicar_tweet(nuevo_tweet)
                .then((tweet_retornado) => {
                    //setTweets(tweets.concat(tweet_retornado));
                    window.location.reload(false);
                    setAutor('');
                    setTexto('');
                    setTipo('');
                    setNotificacion('Hecho!');
                    setTimeout(() => {
                        setNotificacion(null);
                    }, 5000);
                })
                .catch((error) => {
                    setNotificacion('Revisar los campos!');
                    setTimeout(() => {
                        setNotificacion(null);
                    }, 5000);
                });
        } else {
            setNotificacion('Revisar los campos!');
            setTimeout(() => {
                setNotificacion(null);
            }, 5000);
        }
    };

    return (
        <div>
            <h2>Escribe un tweet!</h2>
            {notificacion && <Alert variant="info">{notificacion}</Alert>}
            <Form onSubmit={publicar}>
                <div className="col-xs-3">
                    <Form.Group>
                        <FloatingLabel
                            controlId="autor"
                            label="Tu nombre"
                            className="mb-3"
                            style={inputWidth}
                        >
                            <Form.Control
                                placeholder="Pepito"
                                width="50"
                                type="text"
                                value={autor}
                                onChange={handleSetAutor}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                        <FloatingLabel
                            controlId="tipo"
                            label="Tema (tipo)"
                            className="mb-3"
                            style={inputWidth}
                        >
                            <Form.Control
                                placeholder="Clima"
                                width="50"
                                type="text"
                                value={tipo}
                                onChange={handleSetTipo}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                        <FloatingLabel
                            controlId="texto"
                            label="Escribe algo"
                            className="mb-3"
                            style={inputWidth}
                        >
                            <Form.Control
                                placeholder="Hace frio"
                                as="textarea"
                                style={{ height: '100px' }}
                                type="text"
                                value={texto}
                                onChange={handleSetTexto}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Button variant="primary" id="create-button" type="submit">
                        Tweet!
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default TweetForm;
