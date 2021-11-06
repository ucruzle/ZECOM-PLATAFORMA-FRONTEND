sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"../utils",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, Filter, utils, JSONModel, History, UIComponent) {
	"use strict";

	return Controller.extend("sap.ecom.plataforma.controller.ListaStatusPedidosDeVendas", {

		onNavBack: function () {

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("cockpit", {}, true);
			}

		},

		onAtualizarConsulta: function() {
			// utils.warningDialog("Consulta atualizada com sucesso!!!", "Atualizar Consulta");

			var oView   = this.getView();
			var oModel  = null;
			var Pedidos = [];
			var Pedido  = {};
			
			oModel = oView.getModel();
			
			if ((oModel === undefined) || (oModel === null)) {
				oModel = new JSONModel();
			}

			Pedido = {
				idPedido: "ALE_99000061",
				idOrdemVenda: "671",
				idNfe: "000004443",
				series: "001",
				valorTotal: "20.000",
				status: "Não Autorizada"
			}; 

			Pedidos.push(Pedido);
			
			Pedido = {
				idPedido: "ALE_99000062",
				idOrdemVenda: "672",
				idNfe: "000004444",
				series: "001",
				valorTotal: "20.000",
				status: "Não Autorizada"
			};

			Pedidos.push(Pedido);

			Pedido = {
				idPedido: "ALE_99000063",
				idOrdemVenda: "673",
				idNfe: "000004445",
				series: "001",
				valorTotal: "20.000",
				status: "Faturada"
			};

			Pedidos.push(Pedido);

			Pedido = {
				idPedido: "ALE_99000090",
				idOrdemVenda: "704",
				idNfe: "",
				series: "",
				valorTotal: "",
				status: "Pendente"
			};

			Pedidos.push(Pedido);

			var oData = {
				Pedidos: Pedidos
			};

			oModel.setData(oData);
			oView.setModel(oModel);

		}

		// onbtnCriarVenda: function() {
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("gerapedidodevenda");
		// },

		// onEditDetalheVenda: function(oEvent) {
		// 	// utils.navegaEtapaCarregamento(this, oEvent, 1);
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("gerapedidodevenda");
		// }

	});
});