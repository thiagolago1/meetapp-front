import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import api from '../../services/api';
import { Container, Header, Loading, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      setError(false);
      const response = await api.get('organizing').catch(() => {
        setLoading(false);
        setError(true);
      });
      if (!response) {
        return;
      }
      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(
          parseISO(meetup.date),
          "d 'de' MMMM', às' HH'h' mm'min'",
          {
            locale: pt,
          }
        ),
      }));
      setMeetups(data);
      setLoading(false);
      setError(false);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Meus meetups</h1>
        <Link to="/edit/new">
          <button type="button">
            <MdAddCircleOutline size={20} color="#fff" />
            Novo meetup
          </button>
        </Link>
      </Header>
      {loading || error ? (
        <Loading>
          {loading ? 'Carregando...' : 'Ocorreu um erro inesperado.'}
        </Loading>
      ) : (
        <ul>
          {meetups.map(meetup => (
            <Meetup key={String(meetup.id)} past={meetup.past}>
              <Link to={`/meetup/${meetup.id}`}>
                <div>
                  <p>{meetup.title}</p>
                  <time>{meetup.formattedDate}</time>
                </div>
                <MdChevronRight color="#fff" size="30" />
              </Link>
            </Meetup>
          ))}
        </ul>
      )}
    </Container>
  );
}
