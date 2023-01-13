import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import { Head } from '../../components/Head';
import { PageLayout } from '../../components/PageLayout';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { PageHeader } from '../../components/PageHeader';

const NotFound: NextPage = () => {
  const { t } = useTranslation(['common']);
  const router = useRouter();

  return (
    <PageLayout>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>

      <PageHeader imgSrc="/policy.jpg" imgPosition={40} title="Privacy policy"></PageHeader>

      <section className="container mt-10">
        <h2 className="text-2xl text-center mb-6">
          Questa è la Privacy policy Cookie Policy per Dielle Impianti, accessibile da <span className="text-dielle">http://dielleimpianti.it/it/policy</span>
        </h2>
        Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.

        <h3 className="text-xl font-medium my-3">Titolare del Trattamento dei Dati</h3>
        <p>
          Dielle S.r.l. - Via Galileo Galilei 1, Galliera Veneta 35015, PD (Italia).
          <br />
          Indirizzo email del Titolare: <a href={`mailto:${t('companyEmail')}`} className="underline">{`${t('companyEmail')}`}</a>
        </p>

        <h3 className="text-xl font-medium my-3">Tipologie di Dati raccolti</h3>
        <p>
          Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Strumenti di Tracciamento; Dati di utilizzo; nome; cognome; numero di telefono; email; risposte alle domande; clic; eventi keypress; eventi relativi ai sensori di movimento; movimenti del mouse; posizione relativa allo scorrimento; eventi touch.
          <br />
          Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei dati stessi.
          I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di questa Applicazione.
          Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori. Se l'Utente rifiuta di comunicarli, potrebbe essere impossibile per questa Applicazione fornire il Servizio. Nei casi in cui questa Applicazione indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività.
          Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori, sono incoraggiati a contattare il Titolare. L'eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione, ove non diversamente precisato, ha la finalità di fornire il Servizio richiesto dall'Utente, oltre alle ulteriori finalità descritte nel presente documento e nella Cookie Policy, se disponibile.
          <br />
          L'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione e garantisce di avere il diritto di comunicarli o diffonderli, liberando il Titolare da qualsiasi responsabilità verso terzi.
        </p>

        <h3 className="text-xl font-medium my-3">Modalità e luogo del trattamento dei Dati raccolti</h3>
        <h4 className="text-lg font-medium my-3">Modalità di trattamento</h4>
        <p>
          Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
          <br />
          Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell'organizzazione di questa Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L'elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.
        </p>

        <h4 className="text-lg font-medium my-3">Base giuridica del trattamento</h4>
        <p>
          Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle seguenti condizioni:
          - l'Utente ha prestato il consenso per una o più finalità specifiche; Nota: in alcuni ordinamenti il Titolare può essere autorizzato a trattare Dati Personali senza che debba sussistere il consenso dell'Utente o un'altra delle basi giuridiche specificate di seguito, fino a quando l'Utente non si opponga (“opt-out”) a tale trattamento. Ciò non è tuttavia applicabile qualora il trattamento di Dati Personali sia regolato dalla legislazione europea in materia di protezione dei Dati Personali;
          <br />
          - il trattamento è necessario all'esecuzione di un contratto con l'Utente e/o all'esecuzione di misure precontrattuali;
          <br />
          - il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;
          <br />
          - il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o per l'esercizio di pubblici poteri di cui è investito il Titolare;
          <br />
          - il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.
          <br />
          È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.
        </p>

        <h4 className="text-lg font-medium my-3">Luogo</h4>
        <p>
          I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.
          <br />
          I Dati Personali dell'Utente potrebbero essere trasferiti in un paese diverso da quello in cui l'Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l'Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.
          <br />
          L'Utente ha diritto a ottenere informazioni in merito alla base giuridica del trasferimento di Dati al di fuori dell'Unione Europea o ad un'organizzazione internazionale di diritto internazionale pubblico o costituita da due o più paesi, come ad esempio l'ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i Dati.
          <br />
          L'Utente può verificare se abbia luogo uno dei trasferimenti appena descritti esaminando la sezione di questo documento relativa ai dettagli sul trattamento di Dati Personali o chiedere informazioni al Titolare contattandolo agli estremi riportati in apertura.
        </p>

        <h4 className="text-lg font-medium my-3">Periodo di conservazione</h4>
        <p>
          I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. Pertanto:
          <br />
          - I Dati Personali raccolti per scopi collegati all'esecuzione di un contratto tra il Titolare e l'Utente saranno trattenuti sino a quando sia completata l'esecuzione di tale contratto.
          <br />
          - I Dati Personali raccolti per finalità riconducibili all'interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse. L'Utente può ottenere ulteriori informazioni in merito all'interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.
          <br />
          Quando il trattamento è basato sul consenso dell'Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo in ottemperanza ad un obbligo di legge o per ordine di un'autorità.
          <br />
          Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.
        </p>

        <h3 className="text-xl font-medium my-3">Finalità del Trattamento dei Dati raccolti</h3>
        <p>
          I Dati dell'Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità: Statistica, Contattare l'Utente, Visualizzazione di contenuti da piattaforme esterne e Protezione dallo SPAM.
          <br />
          Per ottenere informazioni dettagliate sulle finalità del trattamento e sui Dati Personali trattati per ciascuna finalità, l'Utente può fare riferimento alla sezione “Dettagli sul trattamento dei Dati Personali”.
        </p>

        <h3 className="text-xl font-medium my-3">Dettagli sul trattamento dei Dati Personali</h3>
        <p>I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</p>

        <h4 className="text-lg font-medium my-3">Contattare l'Utente</h4>
        <h5 className="font-medium my-3">Modulo di contatto (questa Applicazione)</h5>
        <p>
          L'Utente, compilando con i propri Dati il modulo di contatto, acconsente al loro utilizzo per rispondere alle richieste di informazioni, di preventivo, o di qualunque altra natura indicata dall'intestazione del modulo.
          <br />
          Dati Personali trattati: cognome; email; nome; numero di telefono.
        </p>

        <h4 className="text-lg font-medium my-3">Protezione dallo SPAM</h4>
        <p>
          Questo tipo di servizi analizza il traffico di questa Applicazione, potenzialmente contenente Dati Personali degli Utenti, al fine di filtrarlo da parti di traffico, messaggi e contenuti riconosciuti come SPAM.
        </p>

        <h5 className="font-medium my-3">Google reCAPTCHA (Google LLC)</h5>
        <p>
          Google reCAPTCHA è un servizio di protezione dallo SPAM fornito da Google LLC.
          L'utilizzo del sistema reCAPTCHA è soggetto alla <a href="https://www.google.com/intl/it/policies/privacy/" className="underline">privacy policy</a> e ai <a href="https://www.google.com/intl/it/policies/terms/" className="underline">termini di utilizzo</a> di Google.
          <br />
          Dati Personali trattati: clic; Dati di utilizzo; eventi keypress; eventi relativi ai sensori di movimento; eventi touch; movimenti del mouse; posizione relativa allo scorrimento; risposte alle domande; Strumenti di Tracciamento.
          <br />
          Luogo del trattamento: Stati Uniti - <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a>.
        </p>

        <h4 className="text-lg font-medium my-3">Statistica</h4>
        <p>
          I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell'Utente.
        </p>

        <h5 className="font-medium my-3">Google Analytics (Google LLC)</h5>
        <p>
          Google Analytics è un servizio di analisi web fornito da Google LLC (“Google”). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google.
          Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.
          <br />
          Dati Personali trattati: Dati di utilizzo; Strumenti di Tracciamento.
          <br />
          Luogo del trattamento: Stati Uniti - <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> - <a href="https://tools.google.com/dlpage/gaoptout?hl=it" className="underline">Opt Out</a>.
        </p>

        <h4 className="text-lg font-medium my-3">Visualizzazione di contenuti da piattaforme esterne</h4>
        <p>
          Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi.
          <br />
          Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.
        </p>

        <h5 className="font-medium my-3">Google Fonts (Google LLC)</h5>
        <p>
          Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google LLC che permette a questa Applicazione di integrare tali contenuti all'interno delle proprie pagine.
          <br />
          Dati Personali trattati: Dati di utilizzo; Strumenti di Tracciamento.
          <br />
          Luogo del trattamento: Stati Uniti - <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a>.
        </p>


        <h3 className="text-xl font-medium my-3">Diritti dell'Utente</h3>
        <p>
          Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.
          <br />
          In particolare, l'Utente ha il diritto di:
          <br />
          - <b>revocare il consenso in ogni momento.</b> L'Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.
          <br />
          - <b>opporsi al trattamento dei propri Dati</b>. L'Utente può opporsi al trattamento dei propri Dati quando esso avviene su una base giuridica diversa dal consenso. Ulteriori dettagli sul diritto di opposizione sono indicati nella sezione sottostante.
          <br />
          - <b>accedere ai propri Dati.</b> L'Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.
          <br />
          - <b>verificare e chiedere la rettificazione.</b> L'Utente può verificare la correttezza dei propri Dati e richiederne l'aggiornamento o la correzione.
          <br />
          - <b>ottenere la limitazione del trattamento.</b> Quando ricorrono determinate condizioni, l'Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.
          <br />
          - <b>ottenere la cancellazione o rimozione dei propri Dati Personali.</b> Quando ricorrono determinate condizioni, l'Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.
          <br />
          - <b>ricevere i propri Dati o farli trasferire ad altro titolare.</b> L'Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente
          fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare. Questa disposizione è applicabile quando i Dati sono trattati con strumenti automatizzati ed il trattamento è basato sul consenso dell'Utente, su un contratto di cui l'Utente è parte o su misure contrattuali ad esso connesse. proporre reclamo. L'Utente può proporre un reclamo all'autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.
        </p>

        <h4 className="text-lg font-medium my-3">Dettagli sul diritto di opposizione</h4>
        <p>
          Quando i Dati Personali sono trattati nell'interesse pubblico, nell'esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.
          <br />
          Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento senza fornire alcuna motivazione. Per scoprire se il Titolare tratti dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento.
        </p>

        <h4 className="text-lg font-medium my-3">Come esercitare i diritti</h4>
        <p>
          Per esercitare i diritti dell'Utente, gli Utenti possono indirizzare una richiesta agli estremi di contatto del Titolare indicati in questo documento. Le richieste sono depositate a titolo gratuito e evase dal Titolare nel più breve tempo possibile, in ogni caso entro un mese.
        </p>

        <h3 className="text-xl font-medium my-3">Ulteriori informazioni sul trattamento</h3>

        <h4 className="text-lg font-medium my-3">Difesa in giudizio</h4>
        <p>
          I Dati Personali dell'Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questa Applicazione o dei Servizi connessi da parte dell'Utente.
          <br />
          L'Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.
        </p>

        <h4 className="text-lg font-medium my-3">Informative specifiche</h4>
        <p>
          Su richiesta dell'Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.
        </p>

        <h4 className="text-lg font-medium my-3">Log di sistema e manutenzione</h4>
        <p>
          Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l'indirizzo IP Utente.
        </p>

        <h4 className="text-lg font-medium my-3">
          Informazioni non contenute in questa policy
        </h4>
        <p>
          Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.
        </p>

        <h4 className="text-lg font-medium my-3">Risposta alle richieste “Do Not Track”</h4>
        <p>
          Questa Applicazione non supporta le richieste “Do Not Track”.
          <br />
          Per scoprire se gli eventuali servizi di terze parti utilizzati le supportino, l'Utente è invitato a consultare le rispettive privacy policy.
        </p>

        <h4 className="text-lg font-medium my-3">Modifiche a questa privacy policy</h4>
        <p>
          Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
          <br />
          Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell'Utente, se necessario.
        </p>

        <h4 className="text-lg font-medium my-3">Definizioni e riferimenti legali</h4>

        <h5 className="font-medium my-3">Dati Personali (o Dati)</h5>
        <p>
          Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.
        </p>

        <h5 className="font-medium my-3">Dati di Utilizzo</h5>
        <p>
          Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l'orario della richiesta, il metodo utilizzato nell'inoltrare la richiesta al server, la dimensione del
          file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all'itinerario seguito all'interno dell'Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all'ambiente informatico dell'Utente.
        </p>

        <h5 className="font-medium my-3">Utente</h5>
        <p>
          L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l'Interessato.
        </p>

        <h5 className="font-medium my-3">Interessato</h5>
        <p>
          La persona fisica cui si riferiscono i Dati Personali.
        </p>

        <h5 className="font-medium my-3">Responsabile del Trattamento (o Responsabile)</h5>
        <p>
          La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.
        </p>

        <h5 className="font-medium my-3">Titolare del Trattamento (o Titolare)</h5>
        <p>
          La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.
        </p>

        <h5 className="font-medium my-3">Questa Applicazione</h5>
        <p>
          Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.
        </p>

        <h5 className="font-medium my-3">Servizio</h5>
        <p>
          Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.
        </p>

        <h5 className="font-medium my-3">Unione Europea (o UE)</h5>
        <p>
          Salvo ove diversamente specificato, ogni riferimento all'Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell'Unione Europea e dello Spazio Economico Europeo.
        </p>

        <h5 className="font-medium my-3">Cookie</h5>
        <p>
          I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.
        </p>

        <h5 className="font-medium my-3">Strumento di Tracciamento</h5>
        <p>
          Per Strumento di Tracciamento s'intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell'Utente.
        </p>

        <h5 className="font-medium my-3">Riferimenti legali</h5>
        <p>
          La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento (UE) 2016/679.
          <br />
          Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questa Applicazione.
          <br />
          Ultima modifica: 13 gennaio 2023
        </p>
      </section>
    </PageLayout>
  )
}

export default NotFound;

const getStaticProps = makeStaticProps(['common', 'head', 'header', '404',]);
export { getStaticPaths, getStaticProps };

