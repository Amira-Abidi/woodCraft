import { Component, ElementRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Subscription } from 'rxjs';
import { NavigationService } from '../services/navigation.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  mainProductImage$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  productCaption= "CUILLERES EN BOIS JETABLE"
  
  mainProductDescription: string = "Une alternative écologique aux classiques couverts en plastique bon marché, mais avec de meilleurs résultats ? Ne vous inquiétez pas, nous sommes sûrs que vous ne chercherez pas plus loin une fois que vous aurez fait connaissance avec nos couverts en bois biodégradables. Soupes, crèmes, purées ou desserts, aucun type d'aliment, quelle que soit sa température, ne résiste à être dégusté avec nos cuillères en bois. Ces cuillères sont fabriquées en bois naturel et présentent un design simple. Nos couverts en bois ne se fendent pas et constituent le complément idéal pour le petit-déjeuner, le déjeuner ou le dîner. Ses avantages ? Tous les avantages des couverts en métal classiques, plus tous les avantages d'un produit fabriqué à partir de matériaux durables. Pour tous les moments : leur résistance et leur praticité les rendent parfaits pour être utilisés en toutes sortes d'occasions. Que ce soit dans les food trucks, les buffets, les caterings, les événements ou les services de vente à emporter et de livraison, il n'y a rien de mieux qu'une cuillère en bois naturel : ergonomique et isolante contre les hautes températures. Et il ne raye pas les récipients !.  Avec un design pratique : ses lignes simples et la couleur brune du bois rehausseront la beauté naturelle de n'importe laquelle de vos présentations, en lui donnant une touche rustique et écologique. Durabilité et respect de l'environnement : il est toujours préférable d'opter pour des couverts biodégradables et compostables, comme les couverts en bois. Cette alternative au plastique évite de polluer notre planète avec des traitements chimiques. Vous économisez ainsi de l'argent et du temps pour les laver.Utilisez et éliminez sans polluer!";


  toggleProductDescription(newDescription: string) {
    this.mainProductDescription = newDescription;
  }


  private subscription: Subscription | undefined;

    constructor(private navigationService: NavigationService, private elementRef: ElementRef) { }

    ngOnInit() {
        this.subscription = this.navigationService.getSectionToNavigate().subscribe(sectionId => {
            if (sectionId) {
                this.scrollToSection(sectionId);
            }
        });
    }

    scrollToSection(sectionId: string) {
        try {
            const element = this.elementRef.nativeElement.querySelector('#' + sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        } catch (err) {
            console.error("Error navigating to section:", err);
        }
    }

}
