import type { NamespaceNavTranslation } from '../../i18n-types.js'

const fr_nav: NamespaceNavTranslation = {
	home: {
		title: "Page d'Accueil",
		slug: '',
      description: "Bienvenue sur la page d'accueil de Trixolutions ! Nous offrons des formations en Lencioni Teamcoaching."
	},
	about: {
		title: "À Propos",
		slug: 'a-propos',
      description: 'Apprenez-en plus sur les Trixolutions !'
	},
	references: {
		title: "Références",
		slug: 'references',
		description: "Partenaires et références de Trixolutions."
	},
	blog: {
		title: "Blog",
		slug: 'blog',
		description: "Consultez le blog Trixolutions ! (Pour le moment uniquement disponible en néerlandais)",
	},
	open_sessions: {
		title: "Sessions Ouvertes",
		slug: 'sessions-ouvertes',
		description: "Sessions ouvertes, ateliers et formations sur la pyramide de Lencioni chez Trixolutions.",
		items: {
			info_sessions: {
				title: "Sessions d'Information Gratuites et Ouvertes",
				slug: 'sessions-ouvertes/sessions-info-gratuites-ouvertes',
				description: "Séances d'information gratuites, ouvertes et en ligne, sur les formations Lencioni que nous proposons chez Trixolutions.",
			},
			hybrid_traject: {
				title: "Trajet Hybride Lencioni",
				slug: 'sessions-ouvertes/traject-hybride-lencioni',
				description: "Notre Masterclass Trixolutions Lencioni de deux jours, en ligne et hors ligne !",
			},
			deepdive: {
				title: "Lencioni Deepdive - Niveau 2",
				slug: 'sessions-ouvertes/lencioni-deepdive-niveau-2',
				description: "Coaching avancé dans les modèles Lencioni - Lencioni Deepdive",
			},
		}
	},
	contact: {
		title: "Contact",
		slug: 'contact',
		description: "Contactez Trixolutions dès aujourd'hui !",
	},
   others: {
      job_offers: {
         title: "Postes Vacants",
         slug: 'postes-vacants'
      },
      terms_conditions: {
         title: "Conditions Générales",
         slug: 'conditions-generales'
      },
      terms_kmo: {
         title: "Conditions Générales relatives au Portefeuille PME",
         slug: 'conditions-generales-portefeuille-pme'
      },
      privacy_policy: {
         title: "Politique de Confidentialité",
         slug: "politique-de-confidentialite"
      }
   }
}

export default fr_nav
