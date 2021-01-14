<plugin>
				<!-- 指定插件名称及版本号 -->
				<groupId>org.codehaus.cargo</groupId>
				<artifactId>cargo-maven2-plugin</artifactId>
				<version>1.4.8</version>
				<configuration>
					<!--是否说明，操作start、stop等后续操作必须等前面操作完成才能继续 -->
					<wait>true</wait>
					<!-- 容器的配置 -->
					<container>
						<!-- 指定tomcat版本 -->
						<containerId>tomcat9x</containerId>
						<!-- 指定类型：standalone, installed等 -->
						<type>installed</type>
						<!-- 指定Tomcat的位置，即catalina.home -->
						<home>/Users/yuanenguang/Desktop/Apps/apache-tomcat-9.0.2</home>
					</container>
					<!-- 具体的配置 -->
					<configuration>
						<!-- 类型，existing:存在 -->
						<type>existing</type>
						<!-- Tomcat的位置，即catalina.home -->
						<home>/Users/yuanenguang/Desktop/Apps/apache-tomcat-9.0.2</home>
					</configuration>
					<deployables>    <!-- 部署设置 -->
						<deployable>    <!-- 部署的War包名等 -->
							<groupId>vuedemo</groupId>
							<artifactId>vuedemo</artifactId>
							<type>war</type>
							<properties>
								<context>vuedemo</context>   <!-- 部署路径 -->
							</properties>
						</deployable>
					</deployables>
					<deployer>        <!-- 部署配置 -->
						<type>installed</type>        <!-- 类型 -->
					</deployer>
				</configuration>
				<executions>
					<!-- 执行的动作 -->
					<execution>
						<id>verify-deployer</id>
						<phase>install</phase>      <!-- 解析install -->
						<goals>
							<goal>deployer-deploy</goal>
						</goals>
					</execution>
					<execution>
						<id>clean-deployer</id>
						<phase>clean</phase>
						<goals>
							<goal>deployer-undeploy</goal>
						</goals>
					</execution>
				</executions>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>2.3.2</version>
				<configuration>
					<source>1.6</source>
					<target>1.6</target>
					<compilerArguments>
						<endorseddirs>${endorsed.dir}</endorseddirs>
					</compilerArguments>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-war-plugin</artifactId>
				<version>2.1</version>
				<configuration>
					<failOnMissingWebXml>false</failOnMissingWebXml>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-dependency-plugin</artifactId>
				<version>2.1</version>
				<executions>
					<execution>
						<phase>validate</phase>
						<goals>
							<goal>copy</goal>
						</goals>
						<configuration>
							<outputDirectory>${endorsed.dir}</outputDirectory>
							<silent>true</silent>
							<artifactItems>
								<artifactItem>
									<groupId>javax</groupId>
									<artifactId>javaee-endorsed-api</artifactId>
									<version>6.0</version>
									<type>jar</type>
								</artifactItem>
							</artifactItems>
						</configuration>
					</execution>
				</executions>
			</plugin>