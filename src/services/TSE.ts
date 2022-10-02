import axios from 'axios';

class TSEService {
  baseURL: string =
    'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json';
  candidates: Record<string, any> = {
    bostanaro: {
      name: 'Bostanaro',
      party: '',
      number: '',
      votes: 0,
      image: '',
    },
    lulindo: {
      name: 'Lulindo',
      party: '',
      number: '',
      votes: 0,
      image: '',
    },
  };

  async getResults() {
    try {
      const response = await axios.get(this.baseURL);

      //   console.log(response);

      this.candidates.bostanaro = {
        ...this.candidates.bostanaro,
        party: response.data.cand[0].cc,
        number: response.data.cand[0].n,
        votes: response.data.cand[0].st,
        image: '',
      };

      this.candidates.lulindo = {
        ...this.candidates.lulindo,
        party: response.data.cand[1].cc,
        number: response.data.cand[1].n,
        votes: response.data.cand[1].st,
        image: '',
      };
    } catch (error) {
      console.error(error);
    }
  }
}

export default new TSEService();
