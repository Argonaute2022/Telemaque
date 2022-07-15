import React from 'react';
import '../utils/style/Convictions.css';
import Button1 from './Buttons/Button1';
import Banner1 from './Banners/Banner1';

function Convictions () {
	const ConvItems = [
		{
			title: 'Social',
			text:'Le progrès social est le souci constant de la gauche réformiste, dont la finalité est la protection et l’émancipation des classes populaires, des classes moyennes et des personnes victimes de discriminations."'
		},
		{
			title: 'Ecologie',
			text:'La transition écologique fixe désormais le cadre dans lequel doit s’inscrire toute nouvelle politique publique, rompant avec une capitalisme prédateur et poursuivant un développement humain se gardant de ses propres excès.'
		},
		{
			title: 'Europe',
			text:'La gauche de gouvernement assume que l’Europe est le bon échelon pour répondre aux défis de notre temps - lutte contre le dérèglement climatique, régulation du capitalisme mondialisé - et construire collectivement un modèle de société à vocation mondiale.'
		},
		{
			title: 'Démocratie',
			text:'La gauche réformiste place le respect des principes démocratiques au premier rang de ses valeurs et milite pour un approfondissement démocratique continu et une articulation adéquate de ses différentes formes (représentative, sociale, participative…).'
		},
	]

	return (

		<div  id="convictions"> 
			<Banner1 />
			<div>
				<h2 className='convictions__title'>Nos convictions</h2>
			</div>
			
			<div className='convictions__container'>
				<div className='convictions__text'>
					<p className='convictions__text__item'>La gauche réformiste, prise en étau entre une gauche radicale-populiste et un centre droit attrape-tout, est menacée dans son existence même. Pourtant, la gauche de gouvernement – qui allie éthique de la conviction et éthique de la responsabilité – conserve toujours sa pertinence sur l'échiquier politique national malgré des résultats électoraux médiocres aux dernières élections présidentielles.</p>
				
					<p className='convictions__text__item'>Parce que le macronisme et le mélenchonisme ne survivront pas à Emmanuel Macron et à Jean-Luc Mélenchon, la gauche de gouvernement a de l’avenir. Pour cela, elle devra s’appuyer sur les quatre piliers indissociables qui forgent son identité idéologique : le progrès social, la transition écologique, la construction européenne et la démocratie pluraliste.</p>
					<div className='convictions__text__btn'>
						<Button1 />
					</div>
				</div>
				
				<ul className='convictions__topic'>
					{ConvItems.map((item, index)=> {
						return (
							<li key={item.index}>
								<h1 className='convictions__topic__title'>
									{item.title}
								</h1>
								<p className='convictions__topic__text'>
									{item.text}
								</p>
							</li>
							
						)
					})}
				</ul>
			</div>
		</div>
	)
}
export default Convictions