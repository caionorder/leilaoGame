import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { PlayerPage } from '../player/player';

import { ListService } from './list.service';

@Component({
selector: 'page-list-game',
templateUrl: './list.html'
})
export class ListGamePage {

	list:Array<any>;
	playerPage = PlayerPage;
	

	constructor(public navCtrl: NavController, public lService:ListService, public loadingCtrl:LoadingController) {
		let loader = this.loadingCtrl.create({
	      content: "Carregando"
	    });
	    loader.present();

		lService.getList()
		.subscribe((data:any) => {
			console.log(loader);
			loader.dismissAll()
			this.list = data.ativos;
		});
	}
}

