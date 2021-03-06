Ext.define('NewsHolder.view.MainPanel', {
	extend:'Ext.Panel',
	xtype:'mainpanel',
	id:'mainPanel',
	
	 requires: [
	            'Ext.TitleBar',
	            'Ext.dataview.List'
 	 ],
	
	config:{
		layout:{
			type:'card'
		},
		
		items:[
		{
			xtype:'titlebar',
			title:'SMART NEWS',
			docked:'top',
			id:'titlebar',
			items:[{
            	xtype:'button',
            	id:'alBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },
			{
            	xtype:'button',
            	id:'searchBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },{
            	xtype:'button',
            	id:'scrapBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },
            {
            	xtype:'button',
            	id:'kgDetailBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },
            {
            	xtype:'button',
            	id:'kgArticleBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },
			{
            	xtype:'button',
            	id:'homeButton',
            	iconCls:'home',
            	iconMask:true,
            	ui:'action-round',
            	hidden:true,
            	iconAlign:'right',
            },{
            	xtype:'button',
            	id:'mainSearchButton',
            	text:'',
            	iconCls:'search',
            	iconMask:true,
            	iconAlign:'right',
            	align:'right',
            },{
            	xtype:'button',
            	id:'articleScrapButton',
            	text:'',
            	iconCls:'star',
            	iconMask:true,
            	iconAlign:'right',
            	align:'right',
            	hidden:true,
            },
            {
            	xtype:'button',
            	id:'registerKeywordButton',
            	text:'',
            	iconCls:'bookmarks',
            	iconMask:true,
            	iconAlign:'right',
            	align:'right',
            	hidden:true,
            },{
            	xtype:'button',
            	id:'kgDetailAlarmButton',
            	iconCls:'time',
            	iconMask:true,
            	iconAlign:'right',
            	align:'right',
            	hidden:true,
            }]
		},
		{
			xtype : 'panel',
			id:'rssMainPanel',
        	layout: {
			    type: 'vbox',
			},
			items : [
			         {
			        	 xtype : 'panel',
			        	 layout : {
			        		 type : 'hbox'			        		 
			        	 },
			        	 
			        	 
			        	 // button start
			        	 items : [
			  			 		{
									xtype : 'button',
									id : 'mainRssAddBtn',
									text : 'RSS 추가',
									cls:'buttonCSS',
								},
			  			 		{
									xtype : 'button',
									id : 'mainKeywordGroupBtn',
									text : '키워드 모음',
									cls:'buttonCSS',
								},
			  			 		{
									xtype : 'button',
									id : 'mainScrapBtn',
									text : '스크랩 모음',
									cls:'buttonCSS',
								},
			        	 ]
			        	 // button end
			         },
			         
			         {
							xtype:'dataview',
							id:'mainRssList',
							flex : 2,
							itemTpl : new Ext.XTemplate(
							        '<div class="icon-item">'+
										'<div class="icon-image">'+
											'<img src="{mainRssImage}" />'+
									    '</div>'+
										'<div class="icon-title">{mainRssName}</div>'+
							        '</div>'
					    	),						
						    	store:'mainStore',
						}			         
			]
		},
		
		{
			xtype:"articlelist",   // 기사 리스트(1)
		},{
			xtype:"articlepanel",      // 기사 리스트에서 항목을 누르면 해당 기사 전문이 나오는 패널(2)
		},{
			xtype:"keywordGroupPanel",   // 메인화면에서 '키워드 모음' 아이콘을 누르면 나오는 패널(3)
		},{
			xtype:"scrapPanel",     // 메인화면에서 '스크랩 모음' 아이콘을 누르면 나오는 패널
		},{
			xtype:"rsspanel",       // 메인화면에서 'RSS 추가' 아이콘을 누르면 나오는 패널
		},{
			xtype:'keywordpanel',	// 메인화면에서 검색 버튼 눌렀을 때 나오는 패널
		},{
			xtype:'kgdetailpanel'	,	// 키워드 모음에서 하나 선택했을 때 나오는 패널(7)
		}]
	}
});