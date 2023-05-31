prisma:
	## Criacao de Migracoes de Base de Dados
	npx prisma migrate dev

	## execucao de alteracoes

	## execucao do seed
	npx prisma db seed

	## Visualizacao grafica
	npx prisma studio

run:
	## Anular a migração
	yarn typeorm migration:revert

	#docker npx prisma db seed

	##aws
	aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin ADSSSD.dkr.ecr.us-west-2.amazonaws.com
	docker tag XXXX-container:latest ADSSSD.dkr.ecr.us-west-2.amazonaws.com/XXXX-container:latest
	docker push ADSSSD.dkr.ecr.us-west-2.amazonaws.com/XXXX-container:latest

	ls
	#docker
	docker run -it --init -p 8888:5000 XXXX-container
	docker build -t XXXX-container . && docker run -it --init -p 8888:5000 XXXX-container -e dbType=mysql -e dbHost=XXXXX.rds.amazonaws.com -e dbPort=3306 -e dbUsername=XXX -e dbPassword='XXX' -e dbDatabase='XXXX'
	deno run --allow-read --allow-write --allow-net --allow-env --allow-plugin --unstable bin/server.ts
	docker build -t XXXX-container . && docker run -it --init -p 8888:5000 XXXX-container -e dbType=mysql -e dbHost=XXXXX.rds.amazonaws.com -e dbPort=3306 -e dbUsername=XXX -e dbPassword='XXX' -e dbDatabase='XXX'