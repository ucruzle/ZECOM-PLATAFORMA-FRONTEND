sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"../utils",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, Filter, utils, JSONModel, History, UIComponent) {
	"use strict";

	return Controller.extend("sap.ecom.plataforma.controller.ListaVendas", {

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
				idPedido: "LEO_99000020",
				idOrdemVenda: "456",
				dataProcessamento: "01/09/2021",
				horaProcessamento: "14:41:25",
				usuario: "CRUZ.L",
				mensagem: "Venda E-commerce 456 foi gravado."
			}; 

			Pedidos.push(Pedido);
			
			Pedido = {
				idPedido: "LEO_99000021",
				idOrdemVenda: "457",
				dataProcessamento: "01/09/2021",
				horaProcessamento: "14:43:37",
				usuario: "CRUZ.L",
				mensagem: "Venda E-commerce 456 foi gravado."
			};

			Pedidos.push(Pedido);

			Pedido = {
				idPedido: "LEO_99000022",
				idOrdemVenda: "458",
				dataProcessamento: "01/09/2021",
				horaProcessamento: "15:04:25",
				usuario: "CRUZ.L",
				mensagem: "Venda E-commerce 456 foi gravado."
			};

			Pedidos.push(Pedido);

			Pedido = {
				idPedido: "LEO_99000023",
				idOrdemVenda: "459",
				dataProcessamento: "02/09/2021",
				horaProcessamento: "16:17:31",
				usuario: "CRUZ.L",
				mensagem: "Venda E-commerce 456 foi gravado."
			};

			Pedidos.push(Pedido);

			var oData = {
				Pedidos: Pedidos
			};

			oModel.setData(oData);
			oView.setModel(oModel);

		},

		onbtnCriarVenda: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("gerapedidodevenda");
		},

		onEditDetalheVenda: function(oEvent) {
			// utils.navegaEtapaCarregamento(this, oEvent, 1);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("gerapedidodevenda");
		}

	});
});