import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id: 'wooden-cones', image: 'assets/cone.png', caption: 'Cônes alimentaires jetables en bois de pin', description: 'Ces mini cônes en bois permettent de manger facilement et amusant une bouchée d apéritifs, de desserts et d amuse-gueules, un service original et soignérépond aux besoins de votre cuisine, conçu pour contenir une grande quantité de nourriture, Fruits légumes.·Largement applicable: les cônes en bois sont parfaits pour les fêtes, les mariages, les anniversaires, les vacances d été, Noël et l utilisation quotidienne ; Ce sont de la vaisselle jetable pour économiser votre temps et votre énergie sur le nettoyage après les fêtes et les événements, également adaptés aux restaurants, bars, auberges, etc. Ce qui vous apporte du confort dans la vie.',
      color:'Naturel', dimension: '13 cm *5 cm', material: 'Bois', type: 'cone', applications: 'Restauration, Hôtellerie et Traiteur', 
      shape:'conique', price: 85.00, addedToCart: false },
    
      { id: 'feu-en-bois', image: 'assets/feu-bois.png', caption: 'Allume-feu 100% naturel en laine de bois', description: 'L allume-feu Prométhée est un produit 100% naturel, à base de laine de bois, résine naturelle et cire pure aliment colorant ni parfum. La laine de bois utilisée dans la fabrication de cet allume feu est issue de forêts certifiées . Les qualités de l allume-feu Prométhée: Allumage simple et rapide Produit innovant et écologique Sans odeur, ni résidu Permet d allumer tous type de feux (cheminée, four, poêle, barbecue, et chauffage au bois) Sécurité et fiabilité Temps de combustion lent (8 à 10 minutes)',
      color:'Naturel', dimension: '60 * 24 mm', material: 'Bois', type: 'allume bois', applications: 'Restauration, Hôtellerie et Traiteur',
      price: 85.00, shape:'Allongée', addedToCart: false },
    
      { id: 'abaisse-langue', image: 'assets/abaisse-langue.png', caption: 'Abaisse langue en bois jetable', description: 'L Abaisse-langue adulte. En bois naturel. Très haute qualité. Doux et résistant. Ses arêtes sont arrondis et régulières afin de ne pas blesser les muqueuses pendant la consultation. Totalement hygiéniques, ces abaisse-langue sont à usage unique. Emballage boîte carton.',
      color:'Naturel', dimension: '150 * 18 * 1.6 mm', material: 'Bois', type: 'batonnet', applications: 'Restauration, Hôtellerie et Traiteur',
      price: 85.00, shape:'Allongée', addedToCart: false },
     
      { id: 'verre', image: 'assets/verre.avif', caption: 'Verre en bois jetable', description: '·Mini gobelet en bois de pin, couleur claire, pour une préparation solide. Collé mais non étanche, cette verrine en bois est plus recommandée pour une sauce épaisse, pour les pro de l hôtellerie, restauration et traiteur notamment. Dimensions : Hauteur : 4 cm Diamètre : 4 cm au buvant et 3 cm à la base. Contenance : 1,5 cl ou 1 oz. Conditionné par carton de 100 gobelets en bois. Vaisselle Jetable en bois : matière naturelle, biodégradable, compostable et écologique. Le bois est élégant, léger, robuste, résistant à l humidité et aux graisses, micro-ondable, apte au contact alimentaire et selon les cas résistant à la chaleur et pouvant aller au four à plus de 200°C.',
      color:'Naturel', dimension: '11cm', material: 'Bois', type: 'verre', applications: '', shape:'Allongée', price: 85.00, addedToCart: false },
    
      { id: 'plateaux', image: 'assets/plat.png', caption: 'Plateaux en bois jetable', description: 'La plupart des plateaux peuvent accueillir des couvercles de notre vaisselle jetable en plastique. Du simple plateau rectangulaire pour un pique-nique au plateau de luxe pour conférence ou réunion de haut standing.',
      color:'Naturel', dimension: '215 * 170 * 20 mm', material: 'Bois', type: 'plateau', applications: 'Restauration, Hôtellerie et Traiteur',
      price: 85.00, shape:'Allongée', addedToCart: false },

      { id: 'petite-cuillere', image: 'assets/petite-cuillere.png', caption: 'Petite cuilere en bois jetable', description: 'Une alternative écologique aux cuillères classiques ? Économique, comme les cuillères en plastique, mais avec de meilleurs résultats ? Nous vous recommandons notre sélection de couverts en bois biodégradables. Et à quoi peuvent servir ces petites cuillères en bois ? Pour les desserts, les glaces, les gâteaux ou même pour les aliments et boissons chaudes comme le café ou le thé. Le côté pratique avant tout ! Ces petites cuillères en bois sont fabriquées en bois naturel avec un design simple. Nos couverts en bois ne se fendent pas et constituent l accessoire idéal pour le petit-déjeuner, le déjeuner ou le dîner. Ses avantages ? Tous les avantages d une cuillere en métal classique et tous les avantages d un produit fabriqué à partir de matériaux durables. Pour tous les moments : leur résistance et leur praticité les rendent parfaits pour être utilisés en toutes sortes d occasions. Que ce soit dans les food trucks, les buffets, les caterings, les événements ou les services de vente à emporter et de livraison, il n y a rien de mieux qu une petite cuillère en bois naturel : ergonomique et isolante contre les hautes températures. Et il ne raye pas les récipients !, Design naturel : ses lignes simples et la couleur du bois rehausseront la beauté naturelle de toutes vos présentations, en leur donnant une touche rustique et écologique. Respect de l environnement: il est toujours préférable d opter pour des couverts biodégradables et compostables, comme les couverts en bois. Cette alternative au plastique évite de polluer notre planète avec des traitements chimiques. Vous économisez ainsi de l argent et du temps pour les laver. Utilisez et éliminez sans polluer!',
        color:'Naturel', dimension: '14 cm *2.7 cm *1.4 cm', material: 'Bois', type: 'cuillere', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Allongée', addedToCart: false },
 
      { id: 'petite-fourchette', image: 'assets/petite-fourchette.png', caption: 'Petite fourchette en bois jetable', description: 'Une alternative écologique aux fourchettes classiques en plastique bon marché ? Ne vous inquiétez pas, nous sommes sûrs que vous ne chercherez pas plus loin une fois que vous connaîtrez nos fourchettes en bois biodégradables. Il vous suffit de cliquer et de déguster toutes sortes de plats sans effort. Salades saines, plats de riz savoureux ou viandes délicieuses, à quoi ces fourchettes en bois peuvent-elles résister ? Absolument rien. Ces fourchettes sont fabriquées en bois de pin et présentent un design simple. Nos fourchettes en bois ne se fendent pas et complètent parfaitement votre petit-déjeuner, votre déjeuner ou votre dîner. Quels sont les avantages ? Tous les avantages des couverts classiques en métal, plus tous les avantages d un produit fabriqué à partir de matériaux durables, Durable : opter pour des couverts biodégradables et compostables tels que les couverts en bois est toujours préférable. Cette alternative au plastique évite de polluer notre planète avec des traitements chimiques. De plus, elle permet d économiser de l argent et du temps pour les laver. Utiliser et jeter sans polluer!, Sans sacrifier la qualité : nos clients ne cessent de les recommander et de les utiliser dans leurs food trucks, buffets, caterings, événements ou services de livraison et de vente à emporter. Leur qualité est leur garantie : il n y a rien de mieux qu une fourchette en bois naturel : ergonomique et isolante contre les hautes températures. Et elle ne raye pas les récipients !',
        color:'Naturel', dimension: '14 cm *2.7 cm *1.4 cm', material: 'Bois', type: 'fourchette', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Dentelée', addedToCart: false },

      { id: 'cuillere', image: 'assets/cuillere.png', caption: 'Cuillere en bois jetable', description: 'Une alternative écologique aux classiques couverts en plastique bon marché, mais avec de meilleurs résultats ? Ne vous inquiétez pas, nous sommes sûrs que vous ne chercherez pas plus loin une fois que vous aurez fait connaissance avec nos couverts en bois biodégradables. Soupes, crèmes, purées ou desserts, aucun type d aliment, quelle que soit sa température, ne résiste à être dégusté avec nos cuillères en bois. Ces cuillères sont fabriquées en bois naturel et présentent un design simple. Nos couverts en bois ne se fendent pas et constituent le complément idéal pour le petit-déjeuner, le déjeuner ou le dîner. Ses avantages ? Tous les avantages des couverts en métal classiques, plus tous les avantages d un produit fabriqué à partir de matériaux durables. Pour tous les moments : leur résistance et leur praticité les rendent parfaits pour être utilisés en toutes sortes d occasions. Que ce soit dans les food trucks, les buffets, les caterings, les événements ou les services de vente à emporter et de livraison, il n y a rien de mieux qu une cuillère en bois naturel : ergonomique et isolante contre les hautes températures. Et il ne raye pas les récipients !, Avec un design pratique : ses lignes simples et la couleur brune du bois rehausseront la beauté naturelle de n importe laquelle de vos présentations, en lui donnant une touche rustique et écologique. Durabilité et respect de l environnement : il est toujours préférable d opter pour des couverts biodégradables et compostables, comme les couverts en bois. Cette alternative au plastique évite de polluer notre planète avec des traitements chimiques. Vous économisez ainsi de l argent et du temps pour les laver.Utilisez et éliminez sans polluer!',
        color:'Naturel', dimension: '16 cm * 3.1 cm * 2.0cm', material: 'Bois', type: 'cuillere', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Allongée', addedToCart: false },

      { id: 'fourchette', image: 'assets/fourchette.png', caption: 'Fourchette en bois jetable', description: 'Une alternative écologique aux fourchettes classiques en plastique bon marché ? Ne vous inquiétez pas, nous sommes sûrs que vous ne chercherez pas plus loin une fois que vous connaîtrez nos fourchettes en bois biodégradables. Il vous suffit de cliquer et de déguster toutes sortes de plats sans effort. Salades saines, plats de riz savoureux ou viandes délicieuses, à quoi ces fourchettes en bois peuvent-elles résister ? Absolument rien. Ces fourchettes sont fabriquées en bois de bouleau et présentent un design simple. Nos fourchettes en bois ne se fendent pas et complètent parfaitement votre petit-déjeuner, votre déjeuner ou votre dîner. Quels sont les avantages ? Tous les avantages des couverts classiques en métal, plus tous les avantages d un produit fabriqué à partir de matériaux durables. Durable : opter pour des couverts biodégradables et compostables tels que les couverts en bois est toujours préférable. Cette alternative au plastique évite de polluer notre planète avec des traitements chimiques. De plus, elle permet d économiser de l argent et du temps pour les laver. Utiliser et jeter sans polluer! Sans sacrifier la qualité : nos clients ne cessent de les recommander et de les utiliser dans leurs food trucks, buffets, caterings, événements ou services de livraison et de vente à emporter. Leur qualité est leur garantie : il n y a rien de mieux qu une fourchette en bois naturel : ergonomique et isolante contre les hautes températures. Et elle ne raye pas les récipients',
        color:'Naturel', dimension: '16 cm * 2.5 cm * 2.0cm', material: 'Bois', type: 'fourchette', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Dentelée', addedToCart: false },

      { id: 'couteau', image: 'assets/knife.png', caption: 'Couteau en bois jetable', description: 'Ce magnifique couteau jetable est fait de bois clair et n’est pas blanchi chimiquement. Le couteau en bois est donc idéal pour votre table. Le couteau en bois est non toxique et inodore et est lié par certificat. Nos couverts jetables en bois, s ils sont mal dispersés dans l environnement, se compostent naturellement sans laisser de trace. En effet, une fois utilisé, le couteau se jette directement dans la récolte humide, sans polluer. Exigences à retenir aptes au contact avec les denrées alimentaires; certifie sans matières plastiques; atoxique et sans migrations d odeurs et de saveurs; produits à partir de ressources 100 % végétales; compostable et biodégradable; polyvalent. En outre, ils sont robustes, pratiques et fonctionnels et s’adaptent à toute utilisation dans le secteur alimentaire. Il peut être utilisé avec tous les aliments chauds et froids. La robustesse des couteaux en bois les rend idéales pour les réunions de famille, les pique-niques de vacances, les fêtes d’enfants, les festivals, les réceptions, les déjeuners d affaires et toutes les occasions spéciales naturelles que vous célébrez.',
        color:'Naturel', dimension: '11 cm', material: 'Bois', type: 'couteau', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Dentelée', addedToCart: false },

      { id: 'agitateurs', image: 'assets/agitateur.webp', caption: 'Agitateurs cocktail en bois jetable', description: 'Agitateur boisson écologique pour soda, sirop, cocktail, cet agitateur bois d une dimension de 1.0 x 11 cm, avec une partie ronde Ø 1 cm, permettant de mettre un logo, fabriqué dans un bois clair et qui remplace le mélangeur plastique. Agitateurs en bois 100% biodégradables, compostables, agitateurs très adaptés pour les grands verres; C est le mélangeur à cocktail pour les verres tubo long-drink . Ces agitateurs ne transmettent aucun goût à vos boissons, Ils font partie de la gamme de couverts écologiques tout comme les couverts en bois écologiques et biodégradables respectueux de l environnement. Agitateur boisson biodégradable conditionné en paquet de 100 avec un tout petit prix !',
        color:'Naturel', dimension: '11 cm * 1.0 cm * 1.0 cm', material: 'Bois', type: 'agitateur', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Allongée', addedToCart: false },

      { id: 'cuillere à glace', image: 'assets/c-glace.png', caption: 'Cuillere à glace en bois jetable', description: 'Cuillère à glace de 9,5 cm en bois naturel biodégradable, recyclable et compostable. Idéale pour tous types d aliments froids et chauds comme les glaces, les gâteaux, les tapas... Elle est souvent utilisée pour les pique-niques, les fêtes, les anniversaires, les mariages...',
        color:'Naturel', dimension: '9.5 cm * 1.0 cm * 1.0 cm', material: 'Bois', type: 'cuillere', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Allongée', addedToCart: false },
      
      { id: 'Bâtonnets de glace', image: 'assets/batonnets.png', caption: 'Bâtonnets de glace en bois jetable', description: 'Bâtonnets de glace de 11 cm en bois naturel biodégradable, recyclable et compostable. Idéale pour tous types d aliments froids et chauds comme les glaces, les gâteaux, les tapas... Elle est souvent utilisée pour les pique-niques, les fêtes, les anniversaires, les mariages...',
        color:'Naturel', dimension: '110 * 15 *1.0 mm', material: 'Bois', type: 'battonet', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Allongée', addedToCart: false },
        
      { id: 'barquette', image: 'assets/barquette-bateau-bois.png', caption: 'barquette bateau en bois jetable', description: 'Cette barquette est parfaite pour des préparations froides comme chaudes, elle peut contenir un petit gratin, une part de lasagnes, du pain, un cake, une brioche, etc... La barquette en bois jetable convient pour le four traditionnel jusqu à 240°c, et le four à micro-ondes. 100 % recyclable, la barquette en bois jetable est fabriquée en France avec du bois de peuplier français issu de forêts gérées durablement.',
        color:'Naturel', dimension: '11cm', material: 'Bois', type: 'barquette', applications: 'Restauration, Hôtellerie et Traiteur',
        price: 85.00, shape:'Allongée', addedToCart: false },
  ];

  itemCount = 0; // Track the number of items in the cart
  
  productsInCart: any[] = [];

  isCartOpen = false; // State to control cart modal visibility

  constructor(private router: Router) { }

  openCart() {
    this.isCartOpen = true;
  }

  addToCart(product: any) {
    this.itemCount++;
    product.addedToCart = true;
    this.productsInCart.push(product); // Add the product to the cart
  }

  goToDetails(productId: string): void {
    const product = this.products.find(p => p.id === productId);

    if (product) {
      const { image, caption, description, color, dimension, material, type, applications, shape } = product;

      // Navigate to the details page, passing image, caption, and description as query params
      this.router.navigate(['/product', productId], {
        queryParams: {
          image,
          caption,
          description,
          color,
          dimension,
          material,
          type,
          applications,shape
        }
      });
    }
  }
}
