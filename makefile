run:
	##Criação de migracoes
	yarn typeorm migration:create -n create_paymentsMpesaLogs
	yarn typeorm migration:run 

	## Anular a migração
	yarn typeorm migration:revert

	#docker typeorm migration

	##aws
	aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 281401968496.dkr.ecr.us-west-2.amazonaws.com
	docker tag uttn-container:latest 281401968496.dkr.ecr.us-west-2.amazonaws.com/uttn-container:latest
	docker push 281401968496.dkr.ecr.us-west-2.amazonaws.com/uttn-container:latest
	ls
	#docker
	docker run -it --init -p 8888:5000 uttn-container
	docker build -t uttn-container . && docker run -it --init -p 8888:5000 uttn-container -e dbType=mysql -e dbHost=uttn.cwsainxbbluf.us-west-2.rds.amazonaws.com -e dbPort=3306 -e dbUsername=gmahota -e dbPassword='Agnes270115!' -e dbDatabase='uttn_api_test'
	deno run --allow-read --allow-write --allow-net --allow-env --allow-plugin --unstable bin/server.ts
	docker build -t uttn-container . && docker run -it --init -p 8888:5000 uttn-container -e dbType=mysql -e dbHost=uttn.cwsainxbbluf.us-west-2.rds.amazonaws.com -e dbPort=3306 -e dbUsername=gmahota -e dbPassword='Agnes270115!' -e dbDatabase='uttn_api_test'